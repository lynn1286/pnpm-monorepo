import * as React from 'react'
import type { IconProps } from './types'

export const IconPattern2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.917 44C17.441 41.1623 14.973 39 12 39H6.5C6.22386 39 6 39.2239 6 39.5V44H10V43H12C12.7403 43 13.3866 43.4022 13.7324 44H17.917ZM17.917 4C17.441 6.83771 14.973 9 12 9H10V12.5C10 12.7761 9.77614 13 9.5 13H6.5C6.22386 13 6 12.7761 6 12.5V4H10V5H12C12.7403 5 13.3866 4.5978 13.7324 4H17.917Z"
          fill={color}
        />
        <path
          d="M6.5 18C6.22386 18 6 18.2239 6 18.5V33.5C6 33.7761 6.22386 34 6.5 34H9.5C9.77614 34 10 33.7761 10 33.5V30H12C15.3137 30 18 27.3137 18 24 18 20.6863 15.3137 18 12 18H6.5ZM10 26H12C13.1046 26 14 25.1046 14 24 14 22.8954 13.1046 22 12 22H10V26ZM30 5.5C30 5.22386 30.2239 5 30.5 5H36C39.3137 5 42 7.68629 42 11 42 14.3137 39.3137 17 36 17H34V20.5C34 20.7761 33.7761 21 33.5 21H30.5C30.2239 21 30 20.7761 30 20.5V5.5ZM36 13H34V9H36C37.1046 9 38 9.89543 38 11 38 12.1046 37.1046 13 36 13ZM30.5 27C30.2239 27 30 27.2239 30 27.5V42.5C30 42.7761 30.2239 43 30.5 43H33.5C33.7761 43 34 42.7761 34 42.5V39H36C39.3137 39 42 36.3137 42 33 42 29.6863 39.3137 27 36 27H30.5ZM34 35H36C37.1046 35 38 34.1046 38 33 38 31.8954 37.1046 31 36 31H34V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconPattern2
