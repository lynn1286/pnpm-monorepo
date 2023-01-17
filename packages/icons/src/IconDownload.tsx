import * as React from 'react'
import type { IconProps } from './types'

export const IconDownload = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26 25.859V6H22V25.859L16.3732 20.546L13.6268 23.454L24 33.251L34.3732 23.454L31.6268 20.546L26 25.859ZM11 38V34H7V42H41V34H37V38H11Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconDownload.displayName = IconDownloadProps
export default IconDownload
