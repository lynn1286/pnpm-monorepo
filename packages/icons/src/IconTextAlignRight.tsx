import * as React from 'react'
import type { IconProps } from './types'

export const IconTextAlignRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M43 7H5V11H43V7ZM43 17H23V21H43V17ZM43 37H23V41H43V37ZM43 27H9V31H43V27Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconTextAlignRight.displayName = IconTextAlignRightProps
export default IconTextAlignRight
