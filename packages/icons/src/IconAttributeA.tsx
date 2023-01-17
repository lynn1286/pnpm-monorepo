import * as React from 'react'
import type { IconProps } from './types'

export const IconAttributeA = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 20.5C10 14.701 14.701 10 20.5 10C24.2967 10 27.6227 12.0151 29.4669 15.0341C31.2251 15.1585 32.8903 15.6196 34.3984 16.3533C32.6146 10.3658 27.0671 6 20.5 6C12.4919 6 6 12.4919 6 20.5C6 27.0671 10.3658 32.6146 16.3533 34.3984C15.6196 32.8903 15.1585 31.2251 15.0341 29.4669C12.0151 27.6227 10 24.2967 10 20.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          opacity=".5"
          d="M25.2202 15.4017C26.2722 15.139 27.3713 15 28.5 15C29.6287 15 30.7278 15.139 31.7798 15.4017L30.8107 19.2825C30.0731 19.0983 29.2994 19 28.5 19C27.7006 19 26.9269 19.0983 26.1893 19.2825L25.2202 15.4017ZM16.9201 21.5573C18.0615 19.6569 19.6569 18.0615 21.5573 16.9201L23.6169 20.349C22.2782 21.1531 21.1531 22.2782 20.349 23.6169L16.9201 21.5573ZM35.4427 16.9201C37.3431 18.0615 38.9385 19.6569 40.0799 21.5573L36.651 23.6169C35.8469 22.2782 34.7218 21.1531 33.3831 20.349L35.4427 16.9201ZM15 28.5C15 27.3713 15.139 26.2722 15.4017 25.2202L19.2825 26.1893C19.0983 26.9269 19 27.7006 19 28.5C19 29.2994 19.0983 30.0731 19.2825 30.8107L15.4017 31.7798C15.139 30.7278 15 29.6287 15 28.5ZM41.5983 25.2202C41.861 26.2722 42 27.3713 42 28.5C42 29.6287 41.861 30.7278 41.5983 31.7798L37.7175 30.8107C37.9017 30.0731 38 29.2994 38 28.5C38 27.7006 37.9017 26.9269 37.7175 26.1893L41.5983 25.2202ZM21.5573 40.0799C19.6569 38.9385 18.0615 37.3431 16.9201 35.4427L20.349 33.3831C21.1531 34.7218 22.2782 35.8469 23.6169 36.651L21.5573 40.0799ZM40.0799 35.4427C38.9385 37.3431 37.3431 38.9385 35.4427 40.0799L33.3831 36.651C34.7218 35.8469 35.8469 34.7218 36.651 33.3831L40.0799 35.4427ZM28.5 42C27.3713 42 26.2722 41.861 25.2202 41.5983L26.1893 37.7175C26.9269 37.9017 27.7006 38 28.5 38C29.2994 38 30.0731 37.9017 30.8107 37.7175L31.7798 41.5983C30.7278 41.861 29.6287 42 28.5 42Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconAttributeA.displayName = IconAttributeAProps
export default IconAttributeA
