import * as React from 'react'
import type { IconProps } from './types'

export const IconToolRotate = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M39.001 12.3379C35.5244 7.87238 30.0976 5 24 5C13.5066 5 5 13.5066 5 24H9C9 15.7157 15.7157 9 24 9C28.9074 9 33.2644 11.3566 36.001 14.9998L31 15V19H42.5C42.7762 19 43 18.7761 43 18.5V7H39L39.001 12.3379ZM24 43C34.4934 43 43 34.4934 43 24H39C39 32.2842 32.2842 39 24 39C19.093 39 14.7364 36.6438 11.9997 33.001L17 33V29H5.5C5.22386 29 5 29.2238 5 29.5V41H9L8.9996 35.6628C12.4762 40.128 17.9027 43 24 43Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconToolRotate.displayName = IconToolRotateProps
export default IconToolRotate
