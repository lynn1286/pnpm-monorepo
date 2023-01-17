import * as React from 'react'
import type { IconProps } from './types'

export const IconGoogle = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.9519 24C12.9519 22.766 13.1625 21.5823 13.5352 20.473L6.99286 15.5825C5.67839 18.1937 4.99579 21.0769 5.00002 24C5.00002 27.0249 5.71614 29.8783 6.98962 32.411L13.5287 27.5124C13.1474 26.3805 12.9526 25.1943 12.9519 24Z"
          fill={color}
        />
        <path
          d="M24.4423 12.7729C27.1805 12.7729 29.6545 13.7219 31.5987 15.2765L37.2548 9.7496C33.8087 6.81369 29.3904 5 24.4423 5C16.7594 5 10.1555 9.29941 6.99286 15.5825L13.5384 20.473C15.0452 15.9939 19.342 12.7729 24.4423 12.7729Z"
          fill={color}
        />
        <path
          d="M24.4423 35.2271C19.3403 35.2271 15.0436 32.0061 13.5352 27.527L6.99286 32.4175C10.1539 38.7006 16.7578 43 24.4423 43C29.183 43 33.7098 41.3531 37.109 38.265L30.8972 33.5656C29.1457 34.6457 26.939 35.2271 24.4407 35.2271"
          fill={color}
        />
        <path
          d="M43 24C43 22.8778 42.8218 21.6681 42.5577 20.5459H24.4407V27.8865H34.8683C34.3482 30.39 32.9289 32.3138 30.8988 33.5656L37.109 38.265C40.6783 35.023 43 30.1941 43 24Z"
          fill={color}
        />
      </svg>
    )
  }
)

IconGoogle.displayName = IconGoogleProps
export default IconGoogle
