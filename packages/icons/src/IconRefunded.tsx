import * as React from 'react'
import type { IconProps } from './types'

export const IconRefunded = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.4468 7.5C34.7075 7.5 36.5531 9.27712 36.6629 11.5106L36.6681 11.7213V14.8872H40.8894C42.055 14.8872 43 15.8322 43 16.9979V36.6993C42.5539 34.4715 41.4225 32.4704 39.8074 30.9158C38.1477 29.3181 36.1554 28.4205 33.8652 28.2314V25.3236C33.8652 24.99 33.6575 24.6894 33.3392 24.5622C33.021 24.4351 32.6549 24.5065 32.4123 24.7431L26.2471 30.7543C25.9239 31.0694 25.9169 31.5761 26.2313 31.8994L32.3965 38.2411C32.6354 38.4868 33.0048 38.5664 33.3287 38.4419C33.6526 38.3174 33.8652 38.014 33.8652 37.6764V34.5193C34.8546 34.4404 35.8953 34.5082 36.9908 34.729C38.1448 34.9615 39.6481 36.0004 41.4977 38.145C41.8427 38.6113 42.0868 39.1708 42.2727 39.6983C41.9023 40.0201 41.4186 40.2149 40.8894 40.2149H8C6 40.2149 5.00856 39 5.00856 37L5.00826 15.1841L5.00282 14.9162L5 14.3952L5.00856 12.5C5.00856 9.5 7.5 7.50461 10 7.50461L10.8128 7.5H32.4468ZM10.8128 11.7213H32.4468V14.8873H10.8128L10.6604 14.88C9.85762 14.8033 9.22983 14.1271 9.22983 13.3043C9.22983 12.43 9.93855 11.7213 10.8128 11.7213Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconRefunded.displayName = 'IconRefunded'

export default IconRefunded
