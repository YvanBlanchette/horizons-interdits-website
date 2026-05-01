const BentoCard = () => {
	return function BentoCard({ title, desc, to, meta }) {
		return (
			<a
				href={to}
				className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7 hover:ring-white/15"
			>
				<div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
					<div className="absolute -inset-24 bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_45%)]" />
				</div>

				<div className="relative">
					<div className="flex items-start justify-between gap-4">
						<h3 className="text-base font-semibold tracking-tight text-white">{title}</h3>
						{meta ? (
							<span className="rounded-full bg-white/7 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase ring-1 ring-white/10">
								{meta}
							</span>
						) : null}
					</div>
					<p className="mt-2 text-sm leading-6 text-white/65">{desc}</p>

					<div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
						Open
						<span className="transition group-hover:translate-x-0.5">→</span>
					</div>
				</div>
			</a>
		);
	};
};
export default BentoCard;
