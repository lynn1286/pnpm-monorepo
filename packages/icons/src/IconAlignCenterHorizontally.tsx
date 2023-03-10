import * as React from 'react'
import type { IconProps } from './types'

export const IconAlignCenterHorizontally = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.00021 21.9999H17.0002V25.9999H4.00021L4.00021 21.9999ZM43.9998 25.9999H30.9998V21.9999H43.9998L43.9998 25.9999ZM21.9996 42 21.9996 6 25.9996 6 25.9996 42H21.9996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M36 29.5361V18.4639C36 18.0786 35.5494 17.8618 35.2402 18.0984L28.2908 23.4152C27.9031 23.7118 27.9031 24.2882 28.2908 24.5848L35.2402 29.9016C35.5494 30.1382 36 29.9214 36 29.5361ZM12 29.5361V18.4639C12 18.0786 12.4506 17.8618 12.7598 18.0984L19.7092 23.4152C20.0969 23.7118 20.0969 24.2882 19.7092 24.5848L12.7598 29.9016C12.4506 30.1382 12 29.9214 12 29.5361Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconAlignCenterHorizontally.displayName = 'IconAlignCenterHorizontally'

export default IconAlignCenterHorizontally
