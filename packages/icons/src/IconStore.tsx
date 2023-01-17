import * as React from 'react'
import type { IconProps } from './types'

export const IconStore = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42.9949 7.82373C42.9037 6.24892 41.5977 5 40 5H8L7.82373 5.00509C6.24892 5.09634 5 6.40232 5 8V15L5.00381 15.2492C5.07801 17.6744 6.23159 19.8279 8.00039 21.2457L8 40L8.00509 40.1763C8.09634 41.7511 9.40232 43 11 43H37L37.1763 42.9949C38.7511 42.9037 40 41.5977 40 40L40.0006 21.2449C41.8292 19.7787 43 17.5261 43 15V8L42.9949 7.82373ZM13 23C15.1304 23 17.0663 22.1672 18.4989 20.8085C19.9327 22.1668 21.869 23 24 23C26.0841 23 27.9821 22.2031 29.4058 20.8973L29.4999 20.8094C30.9335 22.1672 32.8695 23 35 23C35.339 23 35.6731 22.9789 36.001 22.938L36 39H31V26H17V39H12V22.9381C12.3276 22.979 12.6614 23 13 23ZM21 30V39H27V30H21ZM9 9H16V15L16.0091 15.3855C16.0395 16.0243 16.145 16.6435 16.3181 17.2347C15.5994 18.2997 14.3815 19 13 19L12.8004 18.9951L12.5969 18.9799C10.5771 18.7778 9 17.0731 9 15V9ZM39 9H32V15C32 15.7759 31.8896 16.5259 31.6835 17.2353C32.3304 18.1951 33.3838 18.8586 34.5969 18.9799L34.8004 18.9951L35 19C37.1422 19 38.8911 17.316 38.9951 15.1996L39 15V9ZM20 9H28V15L27.9951 15.1996C27.8911 17.316 26.1422 19 24 19L23.8004 18.9951L23.5969 18.9799C21.5771 18.7778 20 17.0731 20 15V9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconStore.displayName = 'IconStore'

export default IconStore
