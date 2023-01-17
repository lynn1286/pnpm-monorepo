import * as React from 'react'
import type { IconProps } from './types'

export const IconCustomerService = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24 4.5C33.4137 4.5 41.0653 12.0446 41.238 21.4171L41.2385 21.5152C42.2666 22.6097 42.9198 24.0605 42.9931 25.6625L43 25.9646V29.9646C43 33.5544 40.0899 36.4646 36.5 36.4646C36.2948 36.4646 36.0919 36.4551 35.8916 36.4365C35.8207 36.6671 35.7044 36.8891 35.5433 37.0894C33.7229 39.3526 31.2722 40.6842 28.2933 41.0722C27.6556 41.918 26.6416 42.4646 25.5 42.4646C23.567 42.4646 22 40.8976 22 38.9646C22 37.0316 23.567 35.4646 25.5 35.4646C26.7055 35.4646 27.7687 36.0741 28.3982 37.0017C29.962 36.6876 31.2126 35.9699 32.2062 34.8439C30.9075 33.7006 30.0693 32.0475 30.0041 30.1977L30 29.9646V25.9646C30 22.3747 32.9101 19.4646 36.5 19.4646C36.685 19.4646 36.8683 19.4723 37.0494 19.4875C35.9807 13.2485 30.5449 8.5 24 8.5C17.4552 8.5 12.0195 13.2484 10.9499 19.488C11.1317 19.4723 11.315 19.4646 11.5 19.4646C15.0118 19.4646 17.8732 22.2496 17.9959 25.7315L18 25.9646V29.9646C18 33.5544 15.0899 36.4646 11.5 36.4646C7.98819 36.4646 5.12685 33.6796 5.0041 30.1977L5 29.9646V25.9646C5 24.3445 5.59274 22.8628 6.57318 21.7246L6.76 21.516L6.762 21.4171C6.93468 12.0446 14.5863 4.5 24 4.5ZM11.5 23.4646C10.1745 23.4646 9.08996 24.4961 9.00532 25.8002L9 25.9646V29.9646C9 31.3453 10.1193 32.4646 11.5 32.4646C12.8255 32.4646 13.91 31.4331 13.9947 30.129L14 29.9646V25.9646C14 24.5839 12.8807 23.4646 11.5 23.4646ZM34.0053 25.8002C34.09 24.4961 35.1745 23.4646 36.5 23.4646C37.8807 23.4646 39 24.5839 39 25.9646V29.9646L38.9947 30.129C38.91 31.4331 37.8255 32.4646 36.5 32.4646C35.1193 32.4646 34 31.3453 34 29.9646V25.9646L34.0053 25.8002Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconCustomerService.displayName = 'IconCustomerService'

export default IconCustomerService
