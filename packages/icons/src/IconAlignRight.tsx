import * as React from 'react'
import type { IconProps } from './types'

export const IconAlignRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.99979 22.0003 31 22.0003 31 26.0003 5.99979 26.0003V22.0003ZM40.0002 6.00018 40.0002 42.0002H36.0002L36.0002 6.00018 40.0002 6.00018Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M25 29.5361V18.4639C25 18.0786 25.4505 17.8618 25.7597 18.0984L32.7092 23.4152C33.0969 23.7118 33.0969 24.2882 32.7092 24.5848L25.7597 29.9016C25.4505 30.1382 25 29.9214 25 29.5361Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconAlignRight.displayName = IconAlignRightProps
export default IconAlignRight
