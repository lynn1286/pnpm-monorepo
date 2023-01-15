import { getSvgoConfig } from './get-svgo.js'
import * as cheerio from 'cheerio'
import * as prettier from 'prettier'
import * as _ from 'lodash-es'
import { optimize } from 'svgo'
import * as fs from 'fs-extra'
import { handleError } from './utils.js'

export const transformers = {
  /**
   * 处理 svg 源码
   */
  async passSVGO(svgRaw: string, className?: string) {
    console.log('mademine  : passSVGO -> className', className)

    const config = await getSvgoConfig(className)
    const { data } = optimize(svgRaw, config)
    return data as string
  },

  /**
   *  替换 fill 、 stroke 属性值为 currentColor.
   */
  injectCurrentColor(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true })
    $('*').each((i, el: any) => {
      Object.keys(el.attribs).forEach(attrKey => {
        if (['fill', 'stroke'].includes(attrKey)) {
          const val = $(el).attr(attrKey)
          if (val !== 'none') {
            $(el).attr(attrKey, 'currentColor')
          }
        }
      })
    })

    return $.xml()
  },

  /**
   *  格式化
   */
  prettify(svgRaw: string) {
    prettier
      .resolveConfig(process.cwd())
      .then(options => {
        const formatted = prettier.format(svgRaw, { ...options, parser: 'html' })

        return formatted
      })
      .catch(err => handleError(err))
  },

  /**
   *  将一些属性替换成 jsx 格式 - 例如 class -> className
   */
  readyForJSX(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true })
    $('*').each((i, el: any) => {
      Object.keys(el.attribs).forEach(attrKey => {
        if (attrKey.includes('-')) {
          $(el).attr(_.camelCase(attrKey), el.attribs[attrKey]).removeAttr(attrKey)
        }
        if (attrKey === 'class') {
          $(el).attr('className', el.attribs[attrKey]).removeAttr(attrKey)
        }
      })
    })

    return $('svg')
      .attr('props', '...')
      .attr('ref', 'forwardedRef')
      .toString()
      .replace(/stroke=['|"]currentColor['|"]/g, 'stroke={color}')
      .replace(/fill=['|"]currentColor['|"]/g, 'fill={color}')
      .replace('props="..."', '{...props}')
      .replace('ref="forwardedRef"', 'ref={forwardedRef}')
  }
}
