import * as React from 'react'
import type { IconProps } from './types'

export const IconBringToFront = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M32.0395 10.5096L25.3336 4.50961C24.5661 3.82289 23.4026 3.83128 22.645 4.52899L16.1308 10.529L18.8407 13.4712L24.0195 8.7012L29.3723 13.4906L32.0395 10.5096Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M26 23.0001V8.00008H22V23.0001H26Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M25.1534 34.5821C24.4619 35.0701 23.5381 35.0701 22.8466 34.5821L5.84664 22.5821C5.3497 22.2313 5.03941 21.6734 5.0035 21.0662C4.96758 20.459 5.20995 19.8684 5.66208 19.4615L10.3475 15.2447L13.3379 17.9347L10.2 20.7589L24 30.5L37.8 20.7589L34.6621 17.9347L37.6748 15.2647L42.3379 19.4615C42.7901 19.8684 43.0324 20.459 42.9965 21.0662C42.9606 21.6734 42.6503 22.2313 42.1534 22.5821L25.1534 34.5821Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M25.1534 42.6339C24.4619 43.122 23.5381 43.122 22.8466 42.6339L5.84664 30.6339C5.3497 30.2832 5.03941 29.7253 5.0035 29.1181C4.96758 28.5109 5.20995 27.9203 5.66208 27.5134L10.3475 23.2966L13.3379 25.9866L10.2 28.8107L24 38.5519L37.8 28.8107L34.6621 25.9866L37.6748 23.3166L42.3379 27.5134C42.7901 27.9203 43.0324 28.5109 42.9965 29.1181C42.9606 29.7253 42.6503 30.2832 42.1534 30.6339L25.1534 42.6339Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconBringToFront
