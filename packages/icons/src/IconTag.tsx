import * as React from 'react'
import type { IconProps } from './types'

export const IconTag = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.9142 5.40812C25.3317 4.99063 25.9099 4.78106 26.4924 4.82905L26.6672 4.85123L39.3387 7.0289C40.1215 7.16341 40.7452 7.74658 40.9383 8.50691L40.9711 8.66126L43.1488 21.3328C43.2488 21.9147 43.0862 22.5078 42.7108 22.9559L42.5919 23.0858L22.0858 43.5919C21.3458 44.3318 20.1704 44.3708 19.3846 43.7087L19.2574 43.5919L4.40811 28.7426C3.66817 28.0027 3.62923 26.8272 4.29128 26.0414L4.40811 25.9142L24.9142 5.40812ZM27.01 8.968L8.65 27.328L20.671 39.349L39.031 20.989L37.268 10.731L27.01 8.968ZM31 14C32.6569 14 34 15.3431 34 17C34 18.6569 32.6569 20 31 20C29.3431 20 28 18.6569 28 17C28 15.3431 29.3431 14 31 14Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconTag.displayName = IconTagProps
export default IconTag
