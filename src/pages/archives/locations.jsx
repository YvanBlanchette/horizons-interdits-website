import Section from "@/components/archives/section";

const Locations = () => {
	return (
		<Section
			id="locations"
			title="Key Locations"
			subtitle="Stations and worlds that matter to the public record layer."
		>
			<div className="grid gap-4 sm:grid-cols-2">
				{[
					{
						name: "Freyja Station",
						note: "Containment, research, and uneasy silence.",
					},
					{
						name: "Gateway / Lunar Orbit",
						note: "Transfer point and public embarkation hub.",
					},
					{
						name: "Erevos Spire",
						note: "A casino-station with too many cameras and too many secrets.",
					},
					{
						name: "HIP 32349 System",
						note: "Officially: survey target. Unofficially: a problem.",
					},
				].map((p) => (
					<div
						key={p.name}
						className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10"
					>
						<p className="text-sm font-semibold text-white/85">{p.name}</p>
						<p className="mt-2 text-sm leading-6 text-white/65">{p.note}</p>
					</div>
				))}
			</div>
		</Section>
	);
};
export default Locations;
