import Section from "@/components/archives/section";
import Pill from "@/components/archives/pill";

const Records = () => {
	return (
		<Section
			id="records"
			title="Records"
			subtitle="Public filings, verified logs, and curated reference notes."
		>
			<div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
				<div className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
					<p className="text-sm font-semibold text-white/85">Public files</p>
					<ul className="mt-3 space-y-2 text-sm text-white/70">
						<li className="flex items-center justify-between">
							<span>Niña charter summary</span>
							<span className="text-white/45">Verified</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Initial survey mandate</span>
							<span className="text-white/45">Verified</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Corridor incident notes</span>
							<span className="text-white/45">Redacted</span>
						</li>
					</ul>
				</div>

				<div className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
					<p className="text-sm font-semibold text-white/85">Clearance</p>
					<p className="mt-2 text-sm leading-6 text-white/65">Future layers will unlock deeper entries (Book 2, Book 3…). For now: public record only.</p>

					<div className="mt-4 flex flex-wrap items-center gap-2">
						<Pill>LEVEL: 0</Pill>
						<Pill tone="warn">DECLASSIFIED: LOCKED</Pill>
					</div>
				</div>
			</div>
		</Section>
	);
};
export default Records;
