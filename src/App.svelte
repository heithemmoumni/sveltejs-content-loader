<script>
  export let width = 490;
  export let height = 130;
  export let primaryColor = "#bdc3c7";
  export let secondaryColor = "#95a5a6";
</script>

<svg
  viewBox="0 0 {width}
  {height}"
  preserveAspectRatio="xMidYMid meet"
  primary={primaryColor}
  secondary={secondaryColor}>

  <rect
    clip-path="url(#clipPath-3)"
    {width}
    {height}
    style="fill: url(#gradient-3);" />
  <defs>
    <clipPath id="clipPath-3">
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      <rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
      <rect x="0" y="100" rx="3" ry="3" width="400" height="10" />
      <rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
    </clipPath>
    <linearGradient id="gradient-3">
      <stop offset="-1.35691" stop-color={primaryColor}>
        <animate
          attributeName="offset"
          values="-2; 1"
          dur="2s"
          repeatCount="indefinite" />
      </stop>
      <stop offset="-0.856908" stop-color={secondaryColor}>
        <animate
          attributeName="offset"
          values="-1.5; 1.5"
          dur="2s"
          repeatCount="indefinite" />
      </stop>
      <stop offset="-0.356908" stop-color={primaryColor}>
        <animate
          attributeName="offset"
          values="-1; 2"
          dur="2s"
          repeatCount="indefinite" />
      </stop>
    </linearGradient>
  </defs>
</svg>
