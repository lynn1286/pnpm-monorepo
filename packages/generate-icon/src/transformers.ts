import { getSvgoConfig } from './get-svgo.js'
import * as cheerio from 'cheerio'
import * as _ from 'lodash-es'
import { optimize } from 'svgo'
import prettier from 'prettier'

export const transformers = {
  /**
   * 处理 svg 源码
   */
  async passSVGO(svgRaw: string, className?: string) {
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
  async prettify(svgRaw: string) {
    const prettierOptions = prettier.resolveConfig.sync(process.cwd())
    return prettier.format(svgRaw, { ...prettierOptions, parser: 'html' })
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
