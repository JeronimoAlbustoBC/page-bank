export const BarChart = ({ width = 84, height = 65, className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 84 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_d_3294_8602)">
      <rect
        x="4"
        y="0.588867"
        width="75.7278"
        height="57.0085"
        rx="10.2105"
        fill="#CBE1EA"
        shape-rendering="crispEdges"
      />

      <g mask="url(#mask0_3294_8602)">
        <path
          d="M21.3653 45.9681V42.2181H58.8653V45.9681H21.3653ZM23.2403 40.3431V27.2181H28.8653V40.3431H23.2403ZM32.6153 40.3431V17.8431H38.2403V40.3431H32.6153ZM41.9903 40.3431V23.4681H47.6153V40.3431H41.9903ZM51.3653 40.3431V12.2181H56.9903V40.3431H51.3653Z"
          fill="#474747"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_3294_8602"
        x="0.596505"
        y="0.588867"
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
          result="effect1_dropShadow_3294_8602"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3294_8602"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
