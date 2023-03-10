import * as React from 'react'
import type { IconProps } from './types'

export const IconEarth = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5C34.4934 5 43 13.5066 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 13.5066 13.5066 5 24 5ZM24 9C19.7632 9 15.9366 10.7566 13.2089 13.5811L17.0441 14.1289L22.061 20.149L29 21.3057V29.8284L20.2913 38.538C21.4775 38.8397 22.72 39 24 39C26.0389 39 27.9828 38.5932 29.7549 37.8563L32.62 31.306L33.963 26.829L33.616 24.054L31.7506 22.5617L31.5858 22.4142L28 18.8284V13.6148L29.4398 10.0168C27.7533 9.36025 25.9187 9 24 9ZM9.12436 22.0595C9.34536 20.3486 9.85464 18.728 10.6019 17.2481L14.955 17.87L19.9389 23.8507L25 24.694V28.17L16.297 36.8737L16.0006 36.6913L16 26.9708L9.12436 22.0595ZM9.32436 27.1173C9.78347 29.2894 10.7126 31.2881 12.0004 33.002L12 29.029L9.32436 27.1173ZM32 14.382L32.9649 11.9726C36.6282 14.7075 39 19.0768 39 24C39 27.067 38.0796 29.9189 36.4998 32.2947L38.0369 27.1706L37.3838 21.9458L34.339 19.51L32 17.171V14.382Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconEarth.displayName = 'IconEarth'

export default IconEarth
