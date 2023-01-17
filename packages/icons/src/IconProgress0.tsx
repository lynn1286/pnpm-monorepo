import * as React from 'react'
import type { IconProps } from './types'

export const IconProgress0 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M42.3625 28.9139C44.5356 20.8097 41.115 11.9434 33.5032 7.54869C29.918 5.47882 25.9387 4.71012 22.1121 5.09609C19.3597 5.36805 16.78 6.22736 14.4999 7.54693C12.2195 8.861 10.1875 10.6638 8.5769 12.9089C7.25355 14.7457 6.25018 16.8284 5.64845 19.0754C5.04128 21.3312 4.86771 23.6464 5.09749 25.9081C5.37051 28.6507 6.22679 31.2218 7.54049 33.4953C8.85625 35.7822 10.6632 37.8198 12.9147 39.4336C16.0352 41.68 19.8647 43.0032 24.0032 43.0032C32.7984 43.0032 40.1979 37.027 42.3625 28.9139ZM39.0057 24.0032C39.0008 18.8241 36.311 13.7886 31.5032 11.0128C29.1366 9.64646 26.5525 8.99829 24.0032 9.00067V9.00316C23.4997 9.00316 23.002 9.02797 22.5112 9.07643C20.3995 9.28927 18.3467 9.94752 16.5002 11.0116C14.6578 12.0779 13.0634 13.5249 11.8243 15.2449C11.5362 15.6465 11.2651 16.0661 11.0128 16.5032C10.3429 17.6635 9.84563 18.8761 9.51303 20.1112C9.1805 21.3524 9.00319 22.6571 9.00319 24.0032C9.00319 24.5114 9.02846 25.0137 9.07783 25.5089C9.29175 27.6118 9.94736 29.656 11.0056 31.4957C12.0736 33.3444 13.5246 34.9439 15.2502 36.1859C15.5668 36.4128 15.8944 36.629 16.233 36.8339L16.5032 36.9936L16.5019 36.9957C18.7085 38.2724 21.2705 39.0032 24.0032 39.0032C29.5548 39.0032 34.402 35.9872 36.9957 31.5044L36.9936 31.5032C37.6663 30.3379 38.1649 29.12 38.4976 27.8794C38.8016 26.7396 38.9747 25.5465 39 24.317L39.0032 24.0032H39.0057Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconProgress0.displayName = 'IconProgress0'

export default IconProgress0
