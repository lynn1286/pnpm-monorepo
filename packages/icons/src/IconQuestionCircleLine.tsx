import * as React from 'react'
import type { IconProps } from './types'

export const IconQuestionCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24ZM9 24C9 15.7157 15.7157 9 24 9C32.2843 9 39 15.7157 39 24C39 32.2843 32.2843 39 24 39C15.7157 39 9 32.2843 9 24ZM26 31V35H22V31H26ZM30.2889 21.8944C32.216 18.0402 29.4439 13 24 13C19.5621 13 17 15.5621 17 20H21L21.0024 19.7888C21.0513 17.7223 21.8431 17 24 17C26.3561 17 27.3554 18.817 26.7111 20.1056C26.6368 20.2542 26.5132 20.4258 26.3232 20.6381L26.1106 20.8646C26.0319 20.945 25.9452 21.0306 25.8499 21.1221L25.5374 21.4146L24.7882 22.0944L24.3178 22.5358C22.681 24.1101 22 25.2314 22 27V29H26V27L26.0028 26.937C26.0239 26.7029 26.1639 26.4311 26.4935 26.0461L26.6926 25.8244L26.9318 25.5776L27.2138 25.3028L27.541 24.9974L28.4869 24.1345C29.3595 23.3142 29.8941 22.684 30.2889 21.8944Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconQuestionCircleLine
