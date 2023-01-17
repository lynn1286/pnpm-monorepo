import * as React from 'react'
import type { IconProps } from './types'

export const IconDashboard = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M41.9949 9.19623C41.9037 7.97138 40.5977 7 39 7H9L8.82373 7.00396C7.24892 7.07493 6 8.09069 6 9.33333V32.6667L6.00509 32.8038C6.09634 34.0286 7.40232 35 9 35H39L39.1763 34.996C40.7511 34.9251 42 33.9093 42 32.6667V9.33333L41.9949 9.19623ZM10 11H38V31H10V11ZM18 18V28H14V18H18ZM26 28V14H22V28H26ZM34 21V28H30V21H34ZM35 38H13V42H35V38Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconDashboard.displayName = 'IconDashboard'

export default IconDashboard
