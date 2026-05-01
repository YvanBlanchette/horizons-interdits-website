import Section from "../../components/archives/section";

const Tech = () => {
	return (
		<Section
			id="tech"
			title="Technologies"
			subtitle="What humans built, what they borrowed, and what they misunderstood."
		>
			<div className="grid gap-4 sm:grid-cols-2">
				{[
					{
						name: "Neural Interface (Implants)",
						note: "HUDs, audio, and control layers routed through cognition.",
					},
					{
						name: "Magellan Drones",
						note: "Autonomous survey units: mapping, sampling, telemetry.",
					},
					{
						name: "GECO Beacons",
						note: "Charter validation, public logs, and compliance telemetry.",
					},
					{
						name: "Ship Autonomy",
						note: "Automation that fails politely until it doesn’t.",
					},
				].map((t) => (
					<div
						key={t.name}
						className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10"
					>
						<p className="text-sm font-semibold text-white/85">{t.name}</p>
						<p className="mt-2 text-sm leading-6 text-white/65">{t.note}</p>
					</div>
				))}
			</div>
		</Section>
	);
};
export default Tech;
