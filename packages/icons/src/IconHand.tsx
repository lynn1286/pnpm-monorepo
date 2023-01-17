import * as React from 'react'
import type { IconProps } from './types'

export const IconHand = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.7034 7.78924C22.8039 7.78924 22.2043 8.62035 22.2043 9.31558V25.5H19.0324V13.7904C19.0324 13.0667 18.4655 12.3 17.6286 12.3C16.7243 12.3 16.1487 13.0668 16.1487 13.7904V27.5L12.9752 28.6634L10.8315 26.1327C10.3624 25.5788 9.52446 25.5322 8.99674 26.0306C8.54791 26.4545 8.4704 27.1403 8.8133 27.6537L13.5707 34.7762C15.8342 38.1651 19.6404 40.2 23.7158 40.2H27.0493C30.664 40.2 33.9535 38.1124 35.4927 34.8418C35.8782 34.0225 36.0781 33.1281 36.0781 32.2226V17.5C36.0781 16.9631 35.6406 16.3 35.0243 16.3C34.2199 16.3 33.8781 16.9631 33.8781 17.5V25.5L30.8781 25.5V13.5622C30.8781 12.9969 30.4627 12.3 29.6671 12.3C28.8714 12.3 28.4252 12.9969 28.4252 13.5622V25.5H25.1207V9.31557C25.1207 8.62035 24.521 7.78924 23.7034 7.78924ZM28.4809 8.81505C28.3539 6.24486 26.2298 4.20001 23.6281 4.20001C21.0053 4.20001 18.8678 6.27817 18.7726 8.8777C18.3545 8.7619 17.9139 8.70002 17.459 8.70002C14.7471 8.70004 12.5487 10.8984 12.5487 13.6103V22.8898C10.7143 21.6761 8.20881 21.823 6.5249 23.4133C4.79943 25.0429 4.50143 27.6796 5.81966 29.6532L10.577 36.7758C13.5085 41.1647 18.4379 43.8 23.7158 43.8H27.0493C32.0585 43.8 36.6171 40.9071 38.75 36.3747C39.3612 35.0758 39.6781 33.6581 39.6781 32.2226V17.2721C39.6781 14.747 37.6312 12.7 35.1061 12.7C34.7625 12.7 34.4277 12.7379 34.1057 12.8098C33.8502 10.4981 31.8903 8.70001 29.5104 8.70001C29.1566 8.70001 28.812 8.73977 28.4809 8.81505Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)

IconHand.displayName = 'IconHand'

export default IconHand
