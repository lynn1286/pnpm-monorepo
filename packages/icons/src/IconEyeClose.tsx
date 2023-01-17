import * as React from 'react'
import type { IconProps } from './types'

export const IconEyeClose = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.41418 5.58578L20.6703 17.8411C21.6605 17.3046 22.7947 17 24 17C27.866 17 31 20.134 31 24C31 25.2057 30.6951 26.3402 30.1583 27.3307L42.4142 39.5858L39.5858 42.4142L33.2645 36.0938C30.3295 38.0218 27.2418 39 24 39C16.976 39 10.6752 34.4079 5.08516 25.5122L4.79665 25.0482L4.15161 24L4.79665 22.9518C6.94981 19.4529 9.2093 16.5974 11.5758 14.402L5.58576 8.41421L8.41418 5.58578ZM9.35512 23.2577L9.00996 23.7773L8.86497 24L9.00996 24.2227C13.5923 31.2163 18.3934 34.7273 23.4036 34.9847L23.7044 34.9963L24 35C26.1581 35 28.2777 34.402 30.3582 33.1877L27.3306 30.1584C26.3402 30.6952 25.2057 31 24 31C20.134 31 17 27.866 17 24C17 22.7947 17.3046 21.6605 17.8411 20.6703L14.4041 17.2308C12.8153 18.6839 11.2505 20.5168 9.71015 22.7382L9.35512 23.2577ZM42.9148 22.4878C37.3247 13.5921 31.024 9 24 9C21.408 9 18.9145 9.62532 16.5189 10.8615L19.5372 13.8803C21.0059 13.2914 22.4936 13 24 13L24.2955 13.0037L24.5964 13.0153C29.6065 13.2727 34.4077 16.7837 38.99 23.7773L39.134 24L38.99 24.2227L38.5974 24.8125C37.4182 26.5564 36.2246 28.0714 35.0167 29.3613L37.844 32.1881C39.6984 30.2237 41.4847 27.8409 43.2033 25.0482L43.8483 24L43.2033 22.9518L42.9148 22.4878ZM21.0046 23.8328L21 24C21 25.6569 22.3431 27 24 27L24.1673 26.9954L21.0046 23.8328ZM24 21L24.1762 21.0051C25.7511 21.0963 27 22.4023 27 24L26.9946 24.1668L23.8326 21.0046L24 21Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconEyeClose.displayName = 'IconEyeClose'

export default IconEyeClose
