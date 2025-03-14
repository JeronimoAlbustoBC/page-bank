export const TrendUpChart = ({ width = 84, height = 64, className = "" }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 84 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3294_8508)">
      <rect
        x="4"
        width="75.7278"
        height="57.0085"
        rx="10.2105"
        fill="#CDE2C7"
        shape-rendering="crispEdges"
      />
      <mask
        id="mask0_3294_8508"
        maskUnits="userSpaceOnUse"
        x="17"
        y="6"
        width="46"
        height="46"
      >
        <rect x="17.614" y="6.00427" width="45" height="45" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3294_8508)">
        <path
          d="M31.489 36.0043L37.2077 30.2855L40.9577 34.0355L47.614 27.4261V30.3793H51.364V21.0043H41.989V24.7543H44.9421L40.9577 28.7386L37.2077 24.9886L28.864 33.3793L31.489 36.0043ZM26.989 45.3793C25.9577 45.3793 25.0749 45.0121 24.3405 44.2777C23.6061 43.5433 23.239 42.6605 23.239 41.6293V15.3793C23.239 14.348 23.6061 13.4652 24.3405 12.7308C25.0749 11.9965 25.9577 11.6293 26.989 11.6293H53.239C54.2702 11.6293 55.153 11.9965 55.8874 12.7308C56.6218 13.4652 56.989 14.348 56.989 15.3793V41.6293C56.989 42.6605 56.6218 43.5433 55.8874 44.2777C55.153 45.0121 54.2702 45.3793 53.239 45.3793H26.989ZM26.989 41.6293H53.239V15.3793H26.989V41.6293Z"
          fill="#474747"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_3294_8508"
        x="0.596505"
        y="0"
        width="82.5348"
        height="63.8155"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.4035" />
        <feGaussianBlur stdDeviation="1.70175" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3294_8508"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3294_8508"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
