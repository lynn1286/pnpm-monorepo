import * as React from 'react'
import type { IconProps } from './types'

export const IconAttributeW = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M34.5445 37.5276L41.9291 10.5276L38.0708 9.47235L32.3239 30.4845L25.8743 13.1594C25.5829 12.3764 24.8354 11.8571 24 11.8571C23.1645 11.8571 22.4171 12.3764 22.1257 13.1594L15.676 30.4845L9.92914 9.47235L6.07084 10.5276L13.4555 37.5276C13.6845 38.3651 14.4278 38.9592 15.2952 38.998C16.1627 39.0368 16.956 38.5115 17.2589 37.6977L24 19.5898L30.741 37.6977C31.044 38.5115 31.8373 39.0368 32.7047 38.998C33.5722 38.9592 34.3155 38.3651 34.5445 37.5276Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconAttributeW.displayName = IconAttributeWProps
export default IconAttributeW
