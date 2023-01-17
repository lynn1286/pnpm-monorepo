import * as React from 'react'
import type { IconProps } from './types'

export const IconCurrency = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8ZM26.0363 12.9996L25.8859 12.85L22.6186 12.8586L22.469 13.009L22.476 15.851L22.31 15.8864C21.2626 16.1262 20.3873 16.6041 19.6977 17.3148C18.7888 18.2566 18.3278 19.4641 18.3278 20.8969C18.3278 22.2263 18.823 23.2918 19.798 24.0533C20.3482 24.4787 21.0757 24.8 21.9603 25.0104L24.8943 25.6833L25.1796 25.7523C25.546 25.8443 25.8568 25.9358 26.1164 26.026L26.4145 26.1378L26.5686 26.2039C26.762 26.2916 26.9072 26.3771 27.0088 26.4593C27.2383 26.6451 27.3542 26.9707 27.3542 27.4694C27.3542 27.9445 27.1894 28.281 26.8283 28.5472C26.3182 28.9217 25.4913 29.1158 24.3708 29.1158C23.4276 29.1158 22.6751 28.9248 22.1325 28.5525C21.4961 28.1149 21.1882 27.4604 21.1882 26.5306L21.0382 26.3806H18L17.85 26.5306L17.8572 26.8806C17.8861 27.5717 18.0016 28.2082 18.202 28.7763C18.4494 29.4796 18.9054 30.1345 19.5537 30.7206C20.0692 31.1909 20.6217 31.5476 21.1963 31.7803L21.459 31.8783L21.7354 31.966C21.9242 32.021 22.122 32.0691 22.3286 32.1104L22.518 32.144L22.5265 35.0004L22.6769 35.15L25.9442 35.1414L26.0938 34.991L26.086 32.153L26.3157 32.1129C27.135 31.9485 27.8698 31.6729 28.5124 31.2876C29.9969 30.3875 30.7532 29.0091 30.7532 27.2081C30.7532 25.9398 30.3681 24.8838 29.6063 24.0733C28.9591 23.3948 28.0547 22.914 26.9205 22.6417L22.8305 21.7038L22.6465 21.6551C22.3536 21.5691 22.1293 21.4587 21.9755 21.3266C21.8154 21.1913 21.7268 21.0022 21.7268 20.6331C21.7268 19.9567 21.9695 19.5207 22.501 19.2323C22.9286 19.0031 23.5112 18.885 24.232 18.885C25.0332 18.885 25.6943 19.0578 26.2037 19.3972C26.7606 19.7623 27.0161 20.2735 27.0161 21.0316L27.1661 21.1816H30.2043L30.3543 21.0316L30.3487 20.7475C30.3002 19.5305 29.9368 18.4978 29.2666 17.681L29.1097 17.498L28.9288 17.3098C28.245 16.6384 27.3346 16.1759 26.2091 15.9259L26.044 15.892L26.0363 12.9996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconCurrency.displayName = IconCurrencyProps
export default IconCurrency
