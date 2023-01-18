'use client'

import React from 'react'
import * as IconCom from 'icons'
import useCopyToClipboard from '@/lib/useCopy'

interface IIconsProps {
  components: {
    componentName: string
  }[]
}

const Icons = (props: IIconsProps) => {
  const { components } = props

  const [, copy] = useCopyToClipboard()

  const Icon = (props: any) => {
    const component: any = components.reduce((init: { [name: string]: any }, cur) => {
      // @ts-ignore
      init[cur.componentName] = IconCom[cur.componentName]

      return init
    }, {})

    const MenuIcon = component[props.name]

    return <MenuIcon />
  }

  const handlerCopy = (i: string) => {
    const str = '<' + i + '>' + '</' + i + '>'

    copy(str)
  }

  return (
    <>
      {components.map((i) => {
        return (
          <div
            key={i.componentName}
            className="flex flex-col items-center p-6 hover:bg-gray-100 hover:cursor-pointer hover:rounded"
            onClick={() => handlerCopy(i.componentName)}
          >
            {Icon({ name: i.componentName })}
          </div>
        )
      })}
    </>
  )
}

export default Icons
