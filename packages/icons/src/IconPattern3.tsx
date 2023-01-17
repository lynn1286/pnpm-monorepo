import * as React from 'react'
import type { IconProps } from './types'

export const IconPattern3 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 43V27H8C11.3137 27 14 29.6863 14 33 14 36.3137 11.3137 39 8 39H6V42.5C6 42.7761 5.77614 43 5.5 43H4ZM8 35H6V31H8C9.10457 31 10 31.8954 10 33 10 34.1046 9.10457 35 8 35ZM44 27.3414C43.3744 27.1203 42.7013 27 42 27H36.5C36.2239 27 36 27.2239 36 27.5V42.5C36 42.7761 36.2239 43 36.5 43H39.5C39.7761 43 40 42.7761 40 42.5V39H42C42.7013 39 43.3744 38.8797 44 38.6586V33 27.3414ZM44 33C44 31.8954 43.1046 31 42 31H40V35H42C43.1046 35 44 34.1046 44 33ZM10.5 5C10.2239 5 10 5.22386 10 5.5V20.5C10 20.7761 10.2239 21 10.5 21H13.5C13.7761 21 14 20.7761 14 20.5V17H16C19.3137 17 22 14.3137 22 11 22 7.68629 19.3137 5 16 5H10.5ZM14 13H16C17.1046 13 18 12.1046 18 11 18 9.89543 17.1046 9 16 9H14V13ZM28.5 5C28.2239 5 28 5.22386 28 5.5V20.5C28 20.7761 28.2239 21 28.5 21H31.5C31.7761 21 32 20.7761 32 20.5V17H34C37.3137 17 40 14.3137 40 11 40 7.68629 37.3137 5 34 5H28.5ZM32 13H34C35.1046 13 36 12.1046 36 11 36 9.89543 35.1046 9 34 9H32V13ZM19.5 27C19.2239 27 19 27.2239 19 27.5V42.5C19 42.7761 19.2239 43 19.5 43H22.5C22.7761 43 23 42.7761 23 42.5V39H25C28.3137 39 31 36.3137 31 33 31 29.6863 28.3137 27 25 27H19.5ZM23 35H25C26.1046 35 27 34.1046 27 33 27 31.8954 26.1046 31 25 31H23V35Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconPattern3
