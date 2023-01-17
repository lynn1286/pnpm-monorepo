import * as React from 'react'
import type { IconProps } from './types'

export const IconVerification = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M33 14C33 9.02944 28.9706 5 24 5C19.0294 5 15 9.02944 15 14C15 18.9706 19.0294 23 24 23C28.9706 23 33 18.9706 33 14ZM24 9C21.2386 9 19 11.2386 19 14C19 16.7614 21.2386 19 24 19C26.7614 19 29 16.7614 29 14C29 11.2386 26.7614 9 24 9Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M5 42V37C5 30.4745 10.2085 25.1656 16.695 25.0038L17 25H23V29H17C12.6651 29 9.13546 32.4478 9.00381 36.7508L9 37V38H23V42H5Z"
          fill={color}
        />
        <path
          d="M33.5 43C38.7467 43 43 38.7467 43 33.5C43 28.2533 38.7467 24 33.5 24C28.2533 24 24 28.2533 24 33.5C24 38.7467 28.2533 43 33.5 43ZM33.7358 38.1578L39.9122 31.1578L37.2878 28.8422L32.3651 34.4212L29.8584 31.8274L27.3416 34.2596L31.1651 38.2161C31.5044 38.5672 31.975 38.7606 32.4632 38.7495C32.9514 38.7385 33.4127 38.524 33.7358 38.1578Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconVerification.displayName = IconVerificationProps
export default IconVerification
