import * as React from 'react'
import type { IconProps } from './types'

export const IconHeartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42 20C42 13.9249 37.0751 9 31 9L30.6645 9.00506L30.2772 9.02351C28.0899 9.16615 26.0339 9.95272 24.3371 11.2467L23.999 11.514L23.8824 11.4179L23.6047 11.2021C21.7319 9.79425 19.43 9 17 9C10.9249 9 6 13.9249 6 20C6 22.6644 6.95319 25.1868 8.65497 27.1669C9.03351 27.6073 9.44353 28.0146 9.88066 28.3862L22.6248 40.4522L22.7571 40.5671C23.5282 41.1798 24.6449 41.1422 25.3735 40.4538L38.6035 27.9538L38.8724 27.6828C40.8076 25.7002 42 22.9894 42 20ZM30.79 13.003L31 13L31.2407 13.0041C34.9952 13.1309 38 16.2145 38 20L37.9934 20.3081C37.9183 22.0467 37.2096 23.6597 36.0099 24.8888L35.81 25.09L24.001 36.247L12.6308 25.4815L12.1976 25.0932C12.0193 24.9248 11.8493 24.7468 11.6885 24.5596C10.5967 23.2893 10 21.687 10 20C10 16.134 13.134 13 17 13L17.3051 13.0065C18.7245 13.0675 20.0754 13.5532 21.2011 14.3994L21.383 14.541L23.9473 16.6545L26.8182 14.3841L27.0615 14.2078C28.0531 13.5237 29.2648 13.098 30.5375 13.015L30.79 13.003Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconHeartLine.displayName = 'IconHeartLine'

export default IconHeartLine
