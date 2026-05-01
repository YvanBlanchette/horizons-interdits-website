import { Bars3Icon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, label, icon: Icon, open }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				clsx(
					"group relative flex items-center rounded-xl text-sm font-medium transition",
					"text-white/70 hover:bg-white/6 hover:text-white",
					isActive && "bg-white/10 text-white", // Highlight le lien actif
					open ? "px-3 py-2" : "px-2 py-2 justify-center",
				)
			}
		>
			{/* Left */}
			<div className={clsx("flex min-w-0 items-center", open ? "flex-1 gap-3" : "")}>
				{Icon && <Icon className="h-5 w-5 shrink-0 text-white/70 transition group-hover:text-white/90" />}

				{/* Label (animated collapse) */}
				{open && <span className="min-w-0 whitespace-nowrap overflow-hidden transition-all duration-200 ease-out opacity-100 translate-x-0">{label}</span>}
			</div>

			{/* Right arrow (only when open) */}
			{open && <span className="shrink-0 transition-all duration-200 ease-out text-white/30 group-hover:text-white/60">→</span>}

			{/* Tooltip (only when collapsed) */}
			{!open && (
				<div
					className={clsx(
						"pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2",
						"opacity-0 translate-x-1 transition duration-150 ease-out",
						"group-hover:opacity-100 group-hover:translate-x-0",
					)}
				>
					<div className="relative">
						<div className="rounded-lg bg-neutral-950/90 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">{label}</div>
						<div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2">
							<div className="h-2.5 w-2.5 rotate-45 bg-neutral-950/90 ring-1 ring-white/10" />
						</div>
					</div>
				</div>
			)}
		</NavLink>
	);
}

const Sidebar = ({ navOptions }) => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<aside
			className={clsx(
				"hidden h-[calc(100vh-69px)] lg:flex flex-col",
				"backdrop-blur-md border-r border-white/10 bg-white/10 ring-1 ring-white/10",
				"transition-[width] duration-300 ease-in-out",
				sidebarOpen ? "w-69 p-4" : "w-16 p-2", // w-16 = 64px
			)}
		>
			<nav className={clsx("flex-1", sidebarOpen ? "mt-3 space-y-1" : "mt-2 space-y-2")}>
				{/* Header avec bouton toggle */}
				<div className={clsx("flex items-center pb-6", sidebarOpen ? "justify-between px-3" : "justify-center px-0")}>
					{sidebarOpen && <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white/80 whitespace-nowrap">Navigation</p>}

					<button
						type="button"
						className="cursor-pointer p-1 rounded-lg hover:bg-white/10 transition"
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-label={sidebarOpen ? "Fermer la sidebar" : "Ouvrir la sidebar"}
					>
						<Bars3Icon className="h-5 w-5 text-white/90" />
					</button>
				</div>

				{/* Navigation items */}
				{navOptions.map((item) => (
					<NavItem
						key={item.id}
						to={item.id}
						label={item.label}
						icon={item.icon}
						open={sidebarOpen}
					/>
				))}
			</nav>

			{/* Footer (only when open) */}
			{sidebarOpen && (
				<footer className="mt-4 rounded-xl bg-white/4 ring-1 ring-white/10 p-3">
					<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Notice</p>
					<p className="mt-2 text-xs leading-5 text-white/65">
						Public record only.
						<br /> Spoiler layers will be added later.
					</p>
				</footer>
			)}
		</aside>
	);
};

export default Sidebar;
