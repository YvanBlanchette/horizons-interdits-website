import { Outlet } from "react-router-dom";
import Sidebar from "@/components/archives/sidebar";
import TopBar from "../components/archives/top-bar";
import MobileNav from "../components/archives/mobile-nav";
import tabletBg from "@/assets/images/archives-bg.jpg";
import { ArchiveBoxIcon, BeakerIcon, ClockIcon, CpuChipIcon, GlobeAltIcon, MapPinIcon, Squares2X2Icon, UserGroupIcon } from "@heroicons/react/24/outline";

const NAV = [
	{ id: "overview", label: "Overview", icon: Squares2X2Icon },
	{ id: "timeline", label: "Timeline", icon: ClockIcon },
	{ id: "starmap", label: "Star Map", icon: GlobeAltIcon },
	{ id: "factions", label: "Factions", icon: UserGroupIcon },
	{ id: "locations", label: "Key Locations", icon: MapPinIcon },
	{ id: "science", label: "Science & Constraints", icon: BeakerIcon },
	{ id: "tech", label: "Technologies", icon: CpuChipIcon },
	{ id: "records", label: "Records", icon: ArchiveBoxIcon },
];

const ArchivesPage = () => {
	return (
		<div className="bg-black">
			{/* <div className="h-screen w-screen overflow-hidden relative rounded-[36px] bg-neutral-300 p-2.5 shadow-2xl ring-1 ring-neutral-900/20"> */}
			{/* Bezel */}
			{/* <div className="h-full rounded-[30px] bg-neutral-950 p-3 ring-1 ring-white/10"> */}
			{/* Screen */}
			<div
				className="h-full relative overflow-hidden  bg-cover bg-top bg-no-repeat brightness-110"
				style={{ backgroundImage: `url(${tabletBg})` }}
			>
				{/* Background */}
				<div className="pointer-events-none fixed inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.85))]" />
					<div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[3px_3px]" />
					<div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[56px_56px]" />
				</div>

				{/* Layout */}
				<div className="relative h-full flex flex-col">
					<TopBar />
					<div className="flex flex-1 min-h-0">
						<Sidebar navOptions={NAV} />
						<MobileNav navOptions={NAV} />

						<main className="flex-1 p-6 overflow-auto">
							<Outlet />
						</main>
					</div>
				</div>
			</div>
		</div>

		// <div className="pointer-events-none absolute left-1/2 top-3.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/30 ring-1 ring-white/10" />
		// </div>
		// </div>
	);
};

export default ArchivesPage;
