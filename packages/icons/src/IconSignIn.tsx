import * as React from 'react'
import type { IconProps } from './types'

export const IconSignIn = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 5C28.9706 5 33 9.02944 33 14C33 18.9706 28.9706 23 24 23C19.0294 23 15 18.9706 15 14C15 9.02944 19.0294 5 24 5ZM5 37V42H43V37L42.9963 36.6997C42.8394 30.3124 37.6917 25.1631 31.305 25.0038L31 25H17L16.695 25.0038C10.2085 25.1656 5 30.4745 5 37ZM39 37V38H9V37L9.00381 36.7508C9.13546 32.4478 12.6651 29 17 29H31L31.2492 29.0038C35.4694 29.1329 38.8671 32.5306 38.9962 36.7508L39 37ZM19 14C19 11.2386 21.2386 9 24 9C26.7614 9 29 11.2386 29 14C29 16.7614 26.7614 19 24 19C21.2386 19 19 16.7614 19 14Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSignIn.displayName = 'IconSignIn'

export default IconSignIn
