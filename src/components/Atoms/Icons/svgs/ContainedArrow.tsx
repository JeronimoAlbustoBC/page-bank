export const ContainedArrow = ({ width = 84, height = 64, className = "" }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 84 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3294_8903)">
      <rect
        x="4"
        width="75.7278"
        height="57.0085"
        rx="10.2105"
        fill="#CDE2C7"
        shape-rendering="crispEdges"
      />
      <path
        d="M49.7252 30.4896H25.5533V26.5188H49.7252L38.6072 15.4007L41.4363 12.6212L57.3193 28.5042L41.4363 44.3872L38.6072 41.6076L49.7252 30.4896Z"
        fill="#474747"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3294_8903"
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
          result="effect1_dropShadow_3294_8903"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3294_8903"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
