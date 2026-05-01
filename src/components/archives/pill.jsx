const Pill = () => {
	return function Pill({ children, tone = "default" }) {
		const tones = {
			default: "bg-white/6 text-white/70 ring-white/10",
			good: "bg-emerald-500/10 text-emerald-200 ring-emerald-400/20",
			warn: "bg-amber-500/10 text-amber-200 ring-amber-400/20",
		};

		return (
			<span className={["inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium ring-1", tones[tone] ?? tones.default].join(" ")}>
				{children}
			</span>
		);
	};
};
export default Pill;
