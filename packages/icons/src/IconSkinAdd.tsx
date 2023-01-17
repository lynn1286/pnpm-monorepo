import * as React from 'react'
import type { IconProps } from './types'

export const IconSkinAdd = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.4142 5.58579L18.8284 5H8L7.82373 5.00509C6.24892 5.09634 5 6.40232 5 8V24L5.00509 24.1763L5.02018 24.3499C5.19348 25.8419 6.46149 27 8 27H10V39L10.0051 39.1763C10.0963 40.7511 11.4023 42 13 42H23V38H14V23H9V9H17.2L17.4362 9.21088L17.7221 9.45494C19.7282 11.1255 21.8252 12 24 12L24.3102 11.9941L24.6347 11.9751C26.6862 11.8136 28.6663 10.8698 30.5638 9.21088L30.799 9H39V23H43V8L42.9949 7.82373C42.9037 6.24892 41.5977 5 40 5H29.1716L28.5858 5.58579L28.3387 5.82714C26.7804 7.31352 25.3404 8 24 8C22.5891 8 21.0678 7.23935 19.4142 5.58579ZM37 33V27H33V33H27V37H33V43H37V37H43V33H37Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconSkinAdd.displayName = IconSkinAddProps
export default IconSkinAdd
