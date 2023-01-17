import * as React from 'react'
import type { IconProps } from './types'

export const IconFile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M36 16.164V39L12 39L12 9H15.2258V10.0857V18.3714C15.2258 20.5806 17.0167 22.3714 19.2258 22.3714H23.6129C25.8221 22.3714 27.6129 20.5806 27.6129 18.3714V10.0857V9H30.324L36 16.164ZM8 9C8 6.79086 9.79086 5 12 5H30.324C31.5457 5 32.7005 5.55836 33.4592 6.51596L39.1352 13.6799C39.6953 14.3868 40 15.2622 40 16.164V39C40 41.2091 38.2091 43 36 43H12C9.79086 43 8 41.2091 8 39V9ZM19.2258 10.0857H23.6129V18.3714H19.2258V10.0857Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconFile.displayName = IconFileProps
export default IconFile
