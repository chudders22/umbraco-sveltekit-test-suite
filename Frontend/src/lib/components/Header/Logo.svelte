<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 240 80"
	aria-label="3chillies"
	role="img"
	class="h-full w-auto"
>
	<!--
Broken circle: 4 equal arcs of 74 degrees with 16 degree gaps at diagonals.
Circle centre (40,40) radius 32. Gaps centred at 45,135,225,315 SVG degrees.
Arc endpoints: x=40+32*cos(t), y=40+32*sin(t)
-->
	<!-- Arc 1: right side 323 to 37 degrees (through 3-o-clock) -->
	<path
		d="M 65.6 20.7 A 32 32 0 0 1 65.6 59.3"
		fill="none"
		stroke="#dc2626"
		stroke-width="4.5"
		stroke-linecap="round"
	/>
	<!-- Arc 2: bottom 53 to 127 degrees (through 6-o-clock) -->
	<path
		d="M 59.3 65.6 A 32 32 0 0 1 20.7 65.6"
		fill="none"
		stroke="#dc2626"
		stroke-width="4.5"
		stroke-linecap="round"
	/>
	<!-- Arc 3: left side 143 to 217 degrees (through 9-o-clock) -->
	<path
		d="M 14.4 59.3 A 32 32 0 0 1 14.4 20.7"
		fill="none"
		stroke="#dc2626"
		stroke-width="4.5"
		stroke-linecap="round"
	/>
	<!-- Arc 4: top 233 to 307 degrees (through 12-o-clock) -->
	<path
		d="M 20.7 14.4 A 32 32 0 0 1 59.3 14.4"
		fill="none"
		stroke="#dc2626"
		stroke-width="4.5"
		stroke-linecap="round"
	/>

	<!-- Overline bar above 3 -->
	<line x1="26" y1="27" x2="46" y2="27" stroke="#dc2626" stroke-width="4" stroke-linecap="round" />

	<!-- 3 numeral -->
	<text
		x="36"
		y="55"
		font-family="Plus Jakarta Sans, system-ui, sans-serif"
		font-size="25"
		font-weight="800"
		fill="#dc2626"
		text-anchor="middle">3</text
	>

	<!-- chillies wordmark: currentColor adapts to light/dark -->
	<text
		x="86"
		y="52"
		font-family="Plus Jakarta Sans, system-ui, sans-serif"
		font-size="32"
		font-weight="700"
		fill="currentColor"
		letter-spacing="-0.5">chillies</text
	>
</svg>
