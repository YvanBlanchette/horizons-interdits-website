import Section from "@/components/archives/section";

const Factions = () => {
	return (
		<Section
			id="factions"
			title="Factions"
			subtitle="Who holds power, who resists it, and who profits from the unknown."
		>
			<div className="grid gap-4 sm:grid-cols-2">
				{[
					{
						name: "Earth Governance Bloc",
						note: "Policy, oversight, and narrative control.",
					},
					{
						name: "Chartering Office / Regulators",
						note: "Licensing, compliance, and restricted corridors.",
					},
					{
						name: "Corporate Explorers",
						note: "Profit-driven expeditions, proprietary tech.",
					},
					{
						name: "Outer Settlements",
						note: "Local autonomy, uneasy alliances, survival doctrine.",
					},
				].map((f) => (
					<div
						key={f.name}
						className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10"
					>
						<div className="flex items-start justify-between gap-4">
							<p className="text-sm font-semibold text-white/85">{f.name}</p>
							<span className="rounded-full bg-white/7 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase ring-1 ring-white/10">
								Public
							</span>
						</div>
						<p className="mt-2 text-sm leading-6 text-white/65">{f.note}</p>
					</div>
				))}
			</div>
		</Section>
	);
};
export default Factions;
