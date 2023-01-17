import * as React from 'react'
import type { IconProps } from './types'

export const IconSendToBack = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.0395 37.4905L25.3336 43.4905C24.5661 44.1772 23.4026 44.1688 22.645 43.4711L16.1308 37.4711L18.8407 34.5289L24.0195 39.2989L29.3723 34.5095L32.0395 37.4905Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M26 25V40H22V25H26Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
        <path
          d="M25.1534 13.418C24.4619 12.9299 23.5381 12.9299 22.8466 13.418L5.84664 25.418C5.3497 25.7688 5.03941 26.3266 5.0035 26.9339C4.96758 27.5411 5.20995 28.1316 5.66208 28.5385L10.3475 32.7554L13.3379 30.0654L10.2 27.2412L24 17.5L37.8 27.2412L34.6621 30.0654L37.6748 32.7354L42.3379 28.5385C42.7901 28.1316 43.0324 27.5411 42.9965 26.9339C42.9606 26.3266 42.6503 25.7688 42.1534 25.418L25.1534 13.418Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M25.1534 5.36613C24.4619 4.87804 23.5381 4.87804 22.8466 5.36613L5.84664 17.3661C5.3497 17.7169 5.03941 18.2748 5.0035 18.882C4.96758 19.4892 5.20995 20.0797 5.66208 20.4866L10.3475 24.7035L13.3379 22.0135L10.2 19.1893L24 9.44814L37.8 19.1893L34.6621 22.0135L37.6748 24.6835L42.3379 20.4866C42.7901 20.0797 43.0324 19.4892 42.9965 18.882C42.9606 18.2748 42.6503 17.7169 42.1534 17.3661L25.1534 5.36613Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSendToBack.displayName = 'IconSendToBack'

export default IconSendToBack
