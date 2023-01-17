import * as React from 'react'
import type { IconProps } from './types'

export const IconSignUp = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 14C15 9.02944 19.0294 5 24 5C28.9706 5 33 9.02944 33 14C33 18.9706 28.9706 23 24 23C19.0294 23 15 18.9706 15 14ZM29 14C29 11.2386 26.7614 9 24 9C21.2386 9 19 11.2386 19 14C19 16.7614 21.2386 19 24 19C26.7614 19 29 16.7614 29 14ZM33 26H37V32H43V36H37V42H33V36H27V32H33V26ZM25 29V25H17L16.695 25.0038C10.2085 25.1656 5 30.4745 5 37V42H25V38H9V37L9.00381 36.7508C9.13546 32.4478 12.6651 29 17 29H25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

export default IconSignUp
