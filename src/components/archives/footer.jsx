import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="pb-10">
			<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/4 p-5 ring-1 ring-white/10">
				<p className="text-sm text-white/65">Transmission status: stable. Public layer only.</p>
				<Link
					to="/universe"
					className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
				>
					Exit Archives
				</Link>
			</div>
		</footer>
	);
};
export default Footer;
