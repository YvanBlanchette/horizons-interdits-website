import Pill from "@/components/archives/pill";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const TopBar = () => {
	return (
		<header className="top-0 z-30 w-full border-b border-white/15 bg-white/20 px-4 py-4 backdrop-blur-sm sm:px-6 lg:px-8">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<span className="animate-pulse inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
					<div>
						<p className="text-[11px] font-semibold tracking-[0.22em] text-white/70 uppercase">Archive mode</p>
						<p className="text-sm font-semibold text-white/90">Official Universe Archive</p>
					</div>
				</div>

				<div className="flex items-center gap-2 sm:gap-3">
					<Pill>ACCESS: PUBLIC</Pill>
					<Pill tone="good">SIGNAL: STABLE</Pill>

					<Link
						to="/universe"
						className="ml-1 inline-flex items-center justify-center rounded-full bg-white  px-4 py-2 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
						aria-label="Exit Archives"
						title="Exit Archives"
					>
						<ArrowLeftStartOnRectangleIcon
							className="h-5 w-5 rotate-180 mr-1"
							aria-hidden="true"
						/>
						Exit Archives
					</Link>
				</div>
			</div>
		</header>
	);
};
export default TopBar;
