import * as React from 'react'
import type { IconProps } from './types'

export const IconFacebook = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
          fill={color}
        />
        <path
          d="M30.0975 23.9885H26.1635V38.4008H20.2032V23.9885H17.3684V18.9234H20.2032V15.6458C20.2032 13.3019 21.3165 9.63159 26.2165 9.63159L30.6316 9.65006V14.5666H27.4282C26.9027 14.5666 26.1639 14.8291 26.1639 15.9472V18.9281H30.6182L30.0975 23.9885Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconFacebook.displayName = IconFacebookProps
export default IconFacebook
