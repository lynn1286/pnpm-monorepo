import * as React from 'react'
import type { IconProps } from './types'

export const IconPrint = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M33 5C34.1046 5 35 5.89543 35 7V13H40C41.1046 13 42 13.8954 42 15V33C42 34.1046 41.1046 35 40 35H35V41C35 42.0544 34.1841 42.9182 33.1493 42.9945L33 43H15C13.8954 43 13 42.1046 13 41V35H8C6.89543 35 6 34.1046 6 33V15C6 13.8954 6.89543 13 8 13H13V7C13 5.89543 13.8954 5 15 5H33ZM31 29H17V39H31V29ZM10 17H38V31H35V27C35 25.8954 34.1046 25 33 25H15L14.8507 25.0055C13.8159 25.0818 13 25.9456 13 27V31H10V17ZM33 19C34.1046 19 35 19.8954 35 21C35 22.1046 34.1046 23 33 23C31.8954 23 31 22.1046 31 21C31 19.8954 31.8954 19 33 19ZM17 9H31V13H17V9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconPrint.displayName = IconPrintProps
export default IconPrint
