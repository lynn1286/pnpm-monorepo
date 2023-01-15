import * as React from "react";
import { IconProps } from "./types";

export const IconColorInstagramIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M14.143 43.8585C11.7641 43.7503 10.4719 43.3545 9.61239 43.0192C8.4735 42.5758 7.66154 42.048 6.80679 41.1944C5.95203 40.3408 5.42301 39.5289 4.98196 38.39C4.64671 37.5305 4.25084 36.2382 4.14266 33.8594C4.02378 31.288 4 30.5165 4 24.0018C4 17.4871 4.02615 16.7167 4.14147 14.143C4.24965 11.7641 4.6479 10.4743 4.98077 9.61239C5.4242 8.4735 5.95322 7.66154 6.8056 6.8056C7.65917 5.95203 8.47113 5.42182 9.6112 4.98077C10.4707 4.64553 11.7629 4.24965 14.1418 4.14147C16.7144 4.02378 17.4871 4 23.9994 4C30.5141 4 31.2845 4.02615 33.8582 4.14147C36.237 4.24965 37.5269 4.6479 38.3888 4.98077C39.5277 5.42182 40.3396 5.95203 41.1944 6.8056C42.0492 7.65917 42.5758 8.47232 43.0192 9.6112C43.3545 10.4707 43.7503 11.7629 43.8585 14.1418C43.9762 16.7155 44 17.4859 44 24.0006C44 30.5129 43.9762 31.2856 43.8585 33.8594C43.7503 36.2382 43.3521 37.5305 43.0192 38.39C42.5758 39.5289 42.048 40.3408 41.1944 41.1944C40.3408 42.048 39.5277 42.5758 38.3888 43.0192C37.5293 43.3545 36.237 43.7503 33.8582 43.8585C31.2868 43.9762 30.5141 44 23.9994 44C17.4871 44 16.7144 43.9774 14.143 43.8585Z"
        fill={color}
      />
      <path
        d="M14.143 43.8585C11.7641 43.7503 10.4719 43.3545 9.61239 43.0192C8.4735 42.5758 7.66154 42.048 6.80679 41.1944C5.95203 40.3408 5.42301 39.5289 4.98196 38.39C4.64671 37.5305 4.25084 36.2382 4.14266 33.8594C4.02378 31.288 4 30.5165 4 24.0018C4 17.4871 4.02615 16.7167 4.14147 14.143C4.24965 11.7641 4.6479 10.4743 4.98077 9.61239C5.4242 8.4735 5.95322 7.66154 6.8056 6.8056C7.65917 5.95203 8.47113 5.42182 9.6112 4.98077C10.4707 4.64553 11.7629 4.24965 14.1418 4.14147C16.7144 4.02378 17.4871 4 23.9994 4C30.5141 4 31.2845 4.02615 33.8582 4.14147C36.237 4.24965 37.5269 4.6479 38.3888 4.98077C39.5277 5.42182 40.3396 5.95203 41.1944 6.8056C42.0492 7.65917 42.5758 8.47232 43.0192 9.6112C43.3545 10.4707 43.7503 11.7629 43.8585 14.1418C43.9762 16.7155 44 17.4859 44 24.0006C44 30.5129 43.9762 31.2856 43.8585 33.8594C43.7503 36.2382 43.3521 37.5305 43.0192 38.39C42.5758 39.5289 42.048 40.3408 41.1944 41.1944C40.3408 42.048 39.5277 42.5758 38.3888 43.0192C37.5293 43.3545 36.237 43.7503 33.8582 43.8585C31.2868 43.9762 30.5141 44 23.9994 44C17.4871 44 16.7144 43.9774 14.143 43.8585Z"
        fill={color}
      />
      <path
        d="M19.3345 24C19.3345 21.4228 21.4232 19.333 24.0006 19.333C26.5779 19.333 28.6678 21.4228 28.6678 24C28.6678 26.5772 26.5779 28.667 24.0006 28.667C21.4232 28.667 19.3345 26.5772 19.3345 24ZM16.8114 24C16.8114 27.9704 20.03 31.1888 24.0006 31.1888C27.9711 31.1888 31.1897 27.9704 31.1897 24C31.1897 20.0296 27.9711 16.8112 24.0006 16.8112C20.03 16.8112 16.8114 20.0294 16.8114 24ZM29.7943 16.5261C29.7942 16.8584 29.8926 17.1833 30.0771 17.4596C30.2616 17.7359 30.5239 17.9514 30.8308 18.0787C31.1378 18.2059 31.4756 18.2393 31.8015 18.1746C32.1274 18.11 32.4269 17.9501 32.6619 17.7152C32.897 17.4804 33.0571 17.1811 33.122 16.8552C33.187 16.5293 33.1539 16.1915 33.0268 15.8845C32.8998 15.5775 32.6846 15.315 32.4083 15.1303C32.1321 14.9456 31.8074 14.8469 31.4751 14.8468C31.0297 14.847 30.6019 15.024 30.2869 15.3389C29.9719 15.6537 29.7947 16.0807 29.7943 16.5261ZM18.3443 35.3958C16.9793 35.3336 16.2374 35.1063 15.7444 34.9142C15.0907 34.6597 14.6243 34.3566 14.134 33.867C13.6436 33.3773 13.3401 32.9114 13.0867 32.2578C12.8945 31.765 12.6672 31.0228 12.6051 29.6579C12.5372 28.1822 12.5237 27.7389 12.5237 24.0002C12.5237 20.2616 12.5384 19.8195 12.6051 18.3425C12.6673 16.9776 12.8963 16.2369 13.0867 15.7427C13.3412 15.0891 13.6443 14.6227 14.134 14.1324C14.6237 13.642 15.0896 13.3385 15.7444 13.0852C16.2372 12.893 16.9793 12.6656 18.3443 12.6036C19.8201 12.5357 20.2634 12.5221 24.0006 12.5221C27.7377 12.5221 28.1815 12.5366 29.6585 12.6038C31.0235 12.6659 31.7642 12.895 32.2584 13.0854C32.9121 13.3387 33.3785 13.6429 33.8688 14.1326C34.3592 14.6222 34.6616 15.0893 34.9161 15.7429C35.1083 16.2357 35.3356 16.9778 35.3977 18.3428C35.4656 19.8197 35.4791 20.2618 35.4791 24.0004C35.4791 27.7391 35.4656 28.1812 35.3977 29.6581C35.3355 31.0231 35.107 31.765 34.9161 32.258C34.6616 32.9116 34.3585 33.378 33.8688 33.8672C33.3791 34.3564 32.9121 34.6599 32.2584 34.9144C31.7656 35.1066 31.0235 35.334 29.6585 35.396C28.1827 35.4639 27.7394 35.4774 24.0006 35.4774C20.2617 35.4774 19.8197 35.4636 18.3443 35.3958ZM18.2284 10.0848C16.738 10.1527 15.7195 10.389 14.8301 10.7351C13.9095 11.0924 13.1292 11.5719 12.35 12.3499C11.5708 13.1278 11.0925 13.9082 10.7351 14.8299C10.389 15.7198 10.1527 16.7377 10.0848 18.2281C10.0158 19.7208 10 20.198 10 24C10 27.802 10.0158 28.2792 10.0848 29.7719C10.1527 31.2624 10.389 32.2802 10.7351 33.1701C11.0925 34.0906 11.5709 34.8725 12.35 35.6501C13.1291 36.4277 13.9084 36.9065 14.8301 37.2649C15.7212 37.611 16.738 37.8473 18.2284 37.9152C19.722 37.9831 20.1985 38 24.0006 38C27.8027 38 28.2799 37.9842 29.7727 37.9152C31.2633 37.8473 32.2811 37.611 33.171 37.2649C34.0916 36.9065 34.8719 36.4281 35.6512 35.6501C36.4304 34.8722 36.9076 34.0906 37.266 33.1701C37.6121 32.2802 37.8496 31.2623 37.9163 29.7719C37.9842 28.2781 38 27.802 38 24C38 20.198 37.9842 19.7208 37.9163 18.2281C37.8485 16.7376 37.6121 15.7193 37.266 14.8299C36.9076 13.9094 36.4291 13.1291 35.6512 12.3499C34.8732 11.5707 34.0916 11.0924 33.1722 10.7351C32.2811 10.389 31.2632 10.1515 29.7738 10.0848C28.2808 10.0166 27.8038 10 24.0022 10C20.2007 10 19.722 10.0158 18.2284 10.0848Z"
        fill={color}
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.589 43.124) scale(50.7852)"
        >
          <stop offset=".09" stopColor="#FA8F21" />
          <stop offset=".78" stopColor="#D82D7E" />
        </radialGradient>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(31.707 41.84) scale(44.6914)"
        >
          <stop offset=".64" stopColor="#8C3AAA" stopOpacity="0" />
          <stop offset="1" stopColor="#8C3AAA" />
        </radialGradient>
      </defs>
    </svg>
  );
});

export default IconColorInstagramIcon;
