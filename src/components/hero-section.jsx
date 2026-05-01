import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { ArrowLongDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Hero({ title, subtitle, text, cta, bg, href, fullScreen }) {
	return (
		<div
			className={clsx("relative bg-cover bg-top bg-no-repeat", fullScreen && "h-screen", !fullScreen && "h-[90vh] ")}
			style={{ backgroundImage: `url(${bg})` }}
		>
			<Container className="relative">
				<Navbar />
				<div className="pt-16  sm:pt-24  md:pt-32 ">
					<p className="mb-4 max-w-lg text-base font-medium tracking-wider text-white">{subtitle}</p>
					<h1 className="font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl/ md:text-7xl">{title}</h1>
					<p className="mt-8 max-w-lg text-lg/7 font-medium text-white drop-shadow-md sm:text-xl/8">{text}</p>
					<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
						<Link
							className="bg-neutral-50/85 py-2 px-4 rounded-full shadow-xl text-neutral-950 font-semibold tracking-wider hover:bg-neutral-50/70 transition duration-300"
							to={href}
						>
							{cta}
						</Link>
					</div>
				</div>
			</Container>

			{/* scroll indicator */}
			{fullScreen && (
				<div className="absolute bottom-2 left-1/2 uppercase animate-bounce text-white flex flex-col items-center justify-end">
					<p className="text-xs font-medium tracking-wider -mb-1">Scroll</p>
					<ArrowLongDownIcon className="h-10 w-6" />
				</div>
			)}
		</div>
	);
}

export default Hero;
