import * as React from 'react'
import type { IconProps } from './types'

export const IconSpotify = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35.1 4 24 4ZM33.2017 32.9C32.8017 33.4983 32.1017 33.7 31.5 33.3C26.8 30.4 20.9 29.7983 13.8983 31.3983C13.2017 31.6017 12.6 31.1 12.4 30.5C12.2 29.7983 12.7 29.2 13.3 29C20.9 27.2983 27.5 28 32.7 31.2C33.4 31.5 33.4983 32.2983 33.2017 32.9ZM35.6017 27.4C35.1 28.1 34.2 28.4 33.4983 27.9C28.1 24.6 19.9 23.6 13.6 25.6C12.8017 25.8 11.9 25.4 11.7 24.6C11.5 23.8 11.9 22.8983 12.7 22.6983C20 20.5 29 21.6017 35.2 25.4C35.8017 25.7017 36.1 26.7 35.6017 27.4ZM35.8017 21.8C29.4 18 18.7 17.6 12.6 19.5017C11.6 19.8 10.6 19.2 10.3 18.3C10 17.2983 10.6 16.3 11.5 15.9983C18.6 13.8983 30.3 14.2983 37.7017 18.7C38.6 19.2 38.9 20.4 38.4 21.3C37.9017 22.0017 36.7 22.2983 35.8017 21.8Z"
          fill={color}
        />
      </svg>
    )
  }
)

export default IconSpotify
