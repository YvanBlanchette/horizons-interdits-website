import Section from "../../components/archives/section";

const Timeline = () => {
	return (
		<Section
			id="timeline"
			title="Timeline"
			subtitle="Major eras and anchor events. Keep it high-level for the public layer."
		>
			<div className="space-y-4">
				{[
					{
						k: "Pre-Expansion Era",
						v: "Early infrastructure, first corridor experiments, political consolidation.",
					},
					{
						k: "Expansion & Chartering",
						v: "Civilian charters, mixed crews, early deep-range doctrine.",
					},
					{
						k: "The Niña Mission Window",
						v: "Publicly recorded departure, initial survey mandate, limited telemetry.",
					},
				].map((row) => (
					<div
						key={row.k}
						className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10"
					>
						<p className="text-sm font-semibold text-white/85">{row.k}</p>
						<p className="mt-2 text-sm leading-6 text-white/65">{row.v}</p>
					</div>
				))}
			</div>
		</Section>
	);
};
export default Timeline;
