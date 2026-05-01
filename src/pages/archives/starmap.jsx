import Section from "../../components/archives/section";

const Starmap = () => {
	return (
		<Section
			id="starmap"
			title="Star Map"
			subtitle="Public layer map. A real interactive map can live here later."
		>
			<div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
					<p className="text-sm font-semibold text-white/85">Map placeholder</p>
					<p className="mt-2 text-sm leading-6 text-white/65">
						Drop a map component here later (SVG, Canvas, WebGL, etc). For now you can ship with a static image + pins.
					</p>

					<div className="mt-4 aspect-video rounded-xl bg-white/5 ring-1 ring-white/10" />
				</div>

				<div className="rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
					<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Public nodes</p>
					<ul className="mt-3 space-y-2 text-sm text-white/70">
						<li className="flex items-center justify-between">
							<span>Sol / Inner System</span>
							<span className="text-white/45">Verified</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Gateway / Stations</span>
							<span className="text-white/45">Verified</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Beyond charted space</span>
							<span className="text-white/45">Limited</span>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
};
export default Starmap;
