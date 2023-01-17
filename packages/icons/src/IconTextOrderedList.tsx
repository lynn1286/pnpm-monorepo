import * as React from 'react'
import type { IconProps } from './types'

export const IconTextOrderedList = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 10H42V14H14V10ZM14 22H42V26H14V22ZM14 34H42V38H14V34ZM8.49023 16H6.6748V10.2207L4.8916 10.7417V9.3667L8.32373 8.17969H8.49023V16ZM9.93506 28H4.47803V26.8184L6.9917 24.1758C7.61117 23.4704 7.9209 22.91 7.9209 22.4946C7.9209 22.158 7.84749 21.902 7.70068 21.7266C7.55387 21.5511 7.34082 21.4634 7.06152 21.4634C6.78581 21.4634 6.56201 21.5806 6.39014 21.8152C6.21826 22.0497 6.13232 22.3424 6.13232 22.6934H4.31689C4.31689 22.2135 4.43685 21.7704 4.67676 21.364C4.91667 20.9576 5.24967 20.6398 5.67578 20.4106C6.10189 20.1815 6.57812 20.0669 7.10449 20.0669C7.94954 20.0669 8.60034 20.262 9.05688 20.6523C9.51343 21.0426 9.7417 21.603 9.7417 22.3335C9.7417 22.6414 9.68441 22.9413 9.56982 23.2332C9.45524 23.525 9.2771 23.8311 9.0354 24.1516C8.85413 24.392 8.58977 24.6933 8.24232 25.0555L7.86719 25.438L6.85742 26.6035H9.93506V28ZM6.13232 35.3325H6.98633C7.66309 35.3325 8.00146 35.0013 8.00146 34.3389C8.00146 34.0811 7.9209 33.8707 7.75977 33.7078C7.59863 33.5448 7.37126 33.4634 7.07764 33.4634C6.83773 33.4634 6.62915 33.5332 6.4519 33.6729C6.27466 33.8125 6.18604 33.9862 6.18604 34.1938H4.37598C4.37598 33.7821 4.49056 33.415 4.71973 33.0928C4.94889 32.7705 5.26668 32.519 5.6731 32.3381C6.07951 32.1573 6.5262 32.0669 7.01318 32.0669C7.8833 32.0669 8.56722 32.2656 9.06494 32.6631C9.56266 33.0605 9.81152 33.6066 9.81152 34.3013C9.81152 34.6379 9.70858 34.9556 9.50269 35.2546C9.29679 35.5536 8.99691 35.7962 8.60303 35.9824C9.01839 36.1328 9.34424 36.3611 9.58057 36.6672C9.81689 36.9734 9.93506 37.3521 9.93506 37.8032C9.93506 38.5015 9.6665 39.0601 9.12939 39.479C8.59229 39.8979 7.88688 40.1074 7.01318 40.1074C6.50114 40.1074 6.0258 40.0098 5.58716 39.8147C5.14852 39.6195 4.81641 39.3492 4.59082 39.0037C4.36523 38.6581 4.25244 38.2651 4.25244 37.8247H6.07324C6.07324 38.0646 6.16992 38.2723 6.36328 38.4478C6.55664 38.6232 6.79476 38.7109 7.07764 38.7109C7.39632 38.7109 7.65055 38.6223 7.84033 38.4451C8.03011 38.2678 8.125 38.0413 8.125 37.7656C8.125 37.3717 8.02653 37.0924 7.82959 36.9277C7.63265 36.763 7.36051 36.6807 7.01318 36.6807H6.13232V35.3325Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconTextOrderedList.displayName = IconTextOrderedListProps
export default IconTextOrderedList
