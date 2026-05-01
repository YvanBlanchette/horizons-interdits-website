const Section = () => {
	return function Section({ id, title, children, subtitle }) {
		return (
			<section
				id={id}
				className="scroll-mt-24"
			>
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Public record</p>
						<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
						{subtitle ? <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">{subtitle}</p> : null}
					</div>
				</div>

				<div className="mt-6 rounded-2xl bg-white/4 p-5 ring-1 ring-white/10 sm:p-6">{children}</div>
			</section>
		);
	};
};
export default Section;
