const MobileNav = ({ navOptions }) => {
	const NAV = navOptions;

	return (
		<nav className="lg:hidden">
			<div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
				<p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">Quick access</p>
				<div className="mt-3 grid gap-2 sm:grid-cols-2">
					{NAV.slice(0, 6).map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/7"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};
export default MobileNav;
