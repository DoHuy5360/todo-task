function Logo({ w, h, square }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={w || square} height={h || square} viewBox="0 0 375 375">
			<path fill="#94A3B8" d="M 187.570312 190.933594 L 187.570312 375 L 30.070312 279.535156 L 30.070312 95.464844 Z" />
			<path fill="#CBD5E1" d="M 187.570312 190.933594 L 187.570312 375 L 345.070312 279.535156 L 345.070312 95.464844 Z" />
			<path fill="#F1F5F9" d="M 187.570312 190.933594 L 30.070312 95.464844 L 187.570312 0 L 345.070312 95.464844 Z" />
		</svg>
	);
}

export default Logo;
