import BentoCard from "@/components/archives/bento-card";
import Section from "@/components/archives/section";

const Overview = () => {
	return (
		<Section
			id="overview"
			title="Universe Overview"
			subtitle="Start here. This is the public layer: safe after Book One, spoiler-free by design."
		>
			<div className="grid gap-4 sm:grid-cols-2">
				<BentoCard
					title="Star Map"
					desc="A navigable reference of key systems and known routes."
					to="#starmap"
					meta="Map"
				/>
				<BentoCard
					title="Timeline"
					desc="Major eras and turning points, organized by verified events."
					to="#timeline"
					meta="Chronology"
				/>
				<BentoCard
					title="Factions"
					desc="The powers shaping policy, conflict, and exploration."
					to="#factions"
					meta="Politics"
				/>
				<BentoCard
					title="Key Locations"
					desc="Stations, worlds, and landmarks that matter."
					to="#locations"
					meta="Places"
				/>
				<BentoCard
					title="Science & Constraints"
					desc="Hard rules of the setting: propulsion, comms, time, limits."
					to="#science"
					meta="Rules"
				/>
				<BentoCard
					title="Technologies"
					desc="Ships, systems, implants, and tools used by humans."
					to="#tech"
					meta="Engineering"
				/>
			</div>

			<div className="mt-6 rounded-xl bg-white/4 p-4 ring-1 ring-white/10">
				<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Spoiler policy</p>
				<p className="mt-2 text-sm leading-6 text-white/65">
					This layer avoids plot reveals and focuses on the reference frame: what a careful reader can infer after finishing Book One. Future clearance layers
					will add deeper details.
				</p>
			</div>
		</Section>
	);
};
export default Overview;
