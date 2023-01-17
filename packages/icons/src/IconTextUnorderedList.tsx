import * as React from 'react'
import type { IconProps } from './types'

export const IconTextUnorderedList = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mm-icon"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6 10H10V14H6V10ZM14 10H42V14H14V10ZM6 22H10V26H6V22ZM14 22H42V26H14V22ZM6 34H10V38H6V34ZM14 34H42V38H14V34Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconTextUnorderedList.displayName = 'IconTextUnorderedList'

export default IconTextUnorderedList
