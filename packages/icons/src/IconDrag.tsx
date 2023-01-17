import * as React from 'react'
import type { IconProps } from './types'

export const IconDrag = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M40 19C42.1422 19 43.8911 20.684 43.9951 22.8003L44 23V39C44 41.1422 42.316 42.8911 40.1996 42.9951L40 43H24C21.8578 43 20.1089 41.316 20.0049 39.1996L20 39V23C20 20.8578 21.684 19.1089 23.8004 19.0049L24 19H40ZM11.52 29.4C11.3118 30.0292 11.2 30.7013 11.2 31.3996C11.2 33.5753 12.2856 35.4974 13.9447 36.6538L16 34.5996V40.9996H9.6L11.1987 39.3987C10.1948 38.0618 9.6 36.4002 9.6 34.5996C9.6 32.6146 10.323 30.7984 11.52 29.4ZM40 23H24V39H40V23ZM22 4.99999C24.1422 4.99999 25.8911 6.68396 25.9951 8.80035L26 8.99999V15H22V8.99999H9V22H16V26H9C6.8578 26 5.10892 24.316 5.0049 22.1996L5 22V8.99999C5 6.85779 6.68397 5.10891 8.80036 5.00488L9 4.99999H22ZM37.2 4.79999L35.6007 6.40015C36.6049 7.73718 37.2 9.39909 37.2 11.2C37.2 13.1833 36.4783 14.998 35.2832 16.3959C35.4887 15.7675 35.6 15.0968 35.6 14.4C35.6 12.2241 34.5141 10.3018 32.8548 9.14547L30.8 11.2V4.79999H37.2Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconDrag.displayName = IconDragProps
export default IconDrag
