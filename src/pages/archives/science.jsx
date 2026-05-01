import Section from "../../components/archives/section";

const Science = () => {
	return (
		<Section
			id="science"
			title="Science & Constraints"
			subtitle="Hard rules. The universe feels strange because the rules are consistent."
		>
			<div className="grid gap-4 lg:grid-cols-3">
				{[
					{
						name: "Propulsion",
						note: "Limits, fuel logic, acceleration costs, heat management.",
					},
					{
						name: "Communication",
						note: "Latency, bandwidth, corridor interference, lost packets.",
					},
					{
						name: "Corridor Physics",
						note: "Rules for non-standard transitions and what breaks first.",
					},
				].map((s) => (
					<div
						key={s.name}
						className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10"
					>
						<p className="text-sm font-semibold text-white/85">{s.name}</p>
						<p className="mt-2 text-sm leading-6 text-white/65">{s.note}</p>
					</div>
				))}
			</div>

			<div className="mt-6 rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
				<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Principle</p>
				<p className="mt-2 text-sm leading-6 text-white/65">The unknown isn’t magic. It’s consistent physics that humans don’t fully understand yet.</p>
			</div>
		</Section>
	);
};
export default Science;
