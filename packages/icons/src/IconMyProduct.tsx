import * as React from 'react'
import type { IconProps } from './types'

export const IconMyProduct = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.6248 13.8844C24.3659 13.3719 23.6341 13.3719 23.3752 13.8844L21.7417 17.1182L18.2447 17.7648C17.7035 17.8649 17.4842 18.5217 17.8567 18.9269L20.0288 21.2897C20.2298 21.5084 20.3232 21.805 20.2837 22.0994L19.8518 25.3199C19.7766 25.8802 20.3624 26.2939 20.8653 26.0357L24 24.4262L27.1347 26.0357C27.6376 26.2939 28.2233 25.8802 28.1482 25.3199L27.654 21.6348L30.1433 18.9269C30.5158 18.5217 30.2965 17.8649 29.7552 17.7648L26.2583 17.1182L24.6248 13.8844Z"
          fill={color}
        />
        <path
          d="M12.5 5C9.73858 5 7.5 7.23858 7.5 10V41C7.5 41.6877 7.85327 42.3271 8.43541 42.6931C9.01755 43.0592 9.74691 43.1005 10.3666 42.8025L24 36.007L37.6334 42.8025C38.2531 43.1005 38.9825 43.0592 39.5646 42.6931C40.1467 42.3271 40.5 41.6877 40.5 41V10C40.5 7.23858 38.2614 5 35.5 5H12.5ZM11.5 10C11.5 9.44772 11.9477 9 12.5 9H35.5C36.0523 9 36.5 9.44772 36.5 10V37.8192L24.8666 31.9854C24.3189 31.722 23.6811 31.722 23.1334 31.9854L11.5 37.8192V10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconMyProduct.displayName = 'IconMyProduct'

export default IconMyProduct
