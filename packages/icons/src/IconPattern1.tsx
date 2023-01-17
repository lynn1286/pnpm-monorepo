import * as React from 'react'
import type { IconProps } from './types'

export const IconPattern1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 5C6.22386 5 6 5.22386 6 5.5V20.5C6 20.7761 6.22386 21 6.5 21H9.5C9.77614 21 10 20.7761 10 20.5V17H12C15.3137 17 18 14.3137 18 11 18 7.68629 15.3137 5 12 5H6.5ZM10 13H12C13.1046 13 14 12.1046 14 11 14 9.89543 13.1046 9 12 9H10V13ZM30.5 5C30.2239 5 30 5.22386 30 5.5V20.5C30 20.7761 30.2239 21 30.5 21H33.5C33.7761 21 34 20.7761 34 20.5V17H36C39.3137 17 42 14.3137 42 11 42 7.68629 39.3137 5 36 5H30.5ZM34 13H36C37.1046 13 38 12.1046 38 11 38 9.89543 37.1046 9 36 9H34V13ZM6.5 27C6.22386 27 6 27.2239 6 27.5V42.5C6 42.7761 6.22386 43 6.5 43H9.5C9.77614 43 10 42.7761 10 42.5V39H12C15.3137 39 18 36.3137 18 33 18 29.6863 15.3137 27 12 27H6.5ZM10 35H12C13.1046 35 14 34.1046 14 33 14 31.8954 13.1046 31 12 31H10V35ZM30.5 27C30.2239 27 30 27.2239 30 27.5V42.5C30 42.7761 30.2239 43 30.5 43H33.5C33.7761 43 34 42.7761 34 42.5V39H36C39.3137 39 42 36.3137 42 33 42 29.6863 39.3137 27 36 27H30.5ZM34 35H36C37.1046 35 38 34.1046 38 33 38 31.8954 37.1046 31 36 31H34V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconPattern1.displayName = IconPattern1Props
export default IconPattern1
