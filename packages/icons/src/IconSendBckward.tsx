import * as React from 'react'
import type { IconProps } from './types'

export const IconSendBckward = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.0395 35.4905L25.3336 41.4905C24.5661 42.1772 23.4026 42.1688 22.6451 41.4711L16.1308 35.4711L18.8407 32.5289L24.0195 37.2989L29.3723 32.5095L32.0395 35.4905Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M26 19V38H22V19H26Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
        <path
          d="M25.1534 6.36606C24.4619 5.87798 23.5381 5.87798 22.8466 6.36606L5.84664 18.3661C5.3497 18.7168 5.03941 19.2747 5.0035 19.8819C4.96758 20.4891 5.20995 21.0797 5.66208 21.4866L10.3475 25.7034L13.3379 23.0134L10.2 20.1893L24 10.4481L37.8 20.1893L34.6621 23.0134L37.6748 25.6834L42.3379 21.4866C42.7901 21.0797 43.0324 20.4891 42.9965 19.8819C42.9606 19.2747 42.6503 18.7168 42.1534 18.3661L25.1534 6.36606Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSendBckward.displayName = 'IconSendBckward'

export default IconSendBckward
