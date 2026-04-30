export default function Logo() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 240 80"
			aria-label="3chillies"
			role="img"
			className="h-full w-auto"
		>
			{/* Arc 1: right side 323 to 37 degrees (through 3-o-clock) */}
			<path
				d="M 65.6 20.7 A 32 32 0 0 1 65.6 59.3"
				fill="none"
				stroke="#dc2626"
				strokeWidth="4.5"
				strokeLinecap="round"
			/>
			{/* Arc 2: bottom 53 to 127 degrees (through 6-o-clock) */}
			<path
				d="M 59.3 65.6 A 32 32 0 0 1 20.7 65.6"
				fill="none"
				stroke="#dc2626"
				strokeWidth="4.5"
				strokeLinecap="round"
			/>
			{/* Arc 3: left side 143 to 217 degrees (through 9-o-clock) */}
			<path
				d="M 14.4 59.3 A 32 32 0 0 1 14.4 20.7"
				fill="none"
				stroke="#dc2626"
				strokeWidth="4.5"
				strokeLinecap="round"
			/>
			{/* Arc 4: top 233 to 307 degrees (through 12-o-clock) */}
			<path
				d="M 20.7 14.4 A 32 32 0 0 1 59.3 14.4"
				fill="none"
				stroke="#dc2626"
				strokeWidth="4.5"
				strokeLinecap="round"
			/>

			{/* Overline bar above 3 */}
			<line x1="26" y1="27" x2="46" y2="27" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />

			{/* 3 numeral */}
			<text
				x="36"
				y="55"
				fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
				fontSize="25"
				fontWeight="800"
				fill="#dc2626"
				textAnchor="middle"
			>
				3
			</text>

			{/* chillies wordmark: currentColor adapts to light/dark */}
			<text
				x="86"
				y="52"
				fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
				fontSize="32"
				fontWeight="700"
				fill="currentColor"
				letterSpacing="-0.5"
			>
				chillies
			</text>
		</svg>
	);
}
