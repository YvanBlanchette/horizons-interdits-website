import MainLayout from "@/layouts/main-layout";
import universeBG from "@/assets/images/universe-bg.jpg";
import { Container } from "@/components/container";
import { Link } from "react-router-dom";
import tabletBg from "@/assets/images/archives-bg.jpg";

/**
 * TabletStandby
 * - "Fake tablet" preview sitting inside the white section
 * - Click takes you to /archives (React Router)
 * - Animations can be added later (parallax, zoom transition, scanlines, etc.)
 */
function TabletStandby() {
	return (
		<div
			id="archives"
			className="w-full"
		>
			<div className="mx-auto max-w-5xl">
				{/* Optional heading above the device */}
				<div className="mx-auto mb-10 max-w-2xl text-center">
					<p className="text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase">Public access terminal</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">Explore the Archive Interface</h2>
					<p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
						This page contains public records only. Deeper layers will be added as books release.
					</p>
				</div>

				{/* Device */}
				<div className="relative">
					{/* Soft shadow / vignette under the device */}
					<div className="pointer-events-none absolute inset-x-10 -bottom-10 h-24 rounded-[40px] bg-neutral-900/50 blur-3xl" />

					{/* Tablet body */}
					<div className="relative mx-auto max-w-4xl rounded-[36px] bg-neutral-300 p-2.5 shadow-2xl ring-1 ring-neutral-900/20">
						{/* Bezel */}
						<div className="rounded-[28px] bg-neutral-950 p-3 ring-1 ring-white/10">
							{/* Screen */}
							<div
								className="relative overflow-hidden rounded-[22px] bg-cover bg-top bg-no-repeat"
								style={{ backgroundImage: `url(${tabletBg})` }}
							>
								{/* Screen background */}
								<div className="absolute inset-0  backdrop-blur-xs">
									<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.14),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />
									{/* Subtle noise */}
									<div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[3px_3px]" />
									{/* Subtle grid */}
									<div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
								</div>

								{/* Screen content */}
								<div className="relative px-6 py-10 sm:px-10 sm:py-14">
									{/* Top bar */}
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
											<p className="text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase">Archive terminal</p>
										</div>

										<div className="hidden sm:flex items-center gap-3">
											<span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-lg">ACCESS: PUBLIC</span>
											<span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-lg">SIGNAL: STABLE</span>
										</div>
									</div>

									{/* Main */}
									<div className="mt-10 grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
										<div>
											<h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Beyond the Story</h3>
											<p className="mt-3 max-w-prose text-sm leading-6 text-white/75 sm:text-base">
												Public records, reference notes, and science constraints. Designed to grow alongside the series.
											</p>

											<div className="mt-7 flex flex-wrap items-center gap-3">
												<Link
													to="/archives"
													className="tracking-wider animate-pulse hover:animate-none inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
												>
													Tap to enter
												</Link>
											</div>
										</div>

										{/* Right side: small status panel */}
										<div className="rounded-2xl bg-white/15 p-5 ring-1 ring-white/15 backdrop-blur-lg">
											<p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">System summary</p>

											<dl className="mt-4 space-y-3">
												<div className="flex items-center justify-between gap-4">
													<dt className="text-sm text-white/70">Records</dt>
													<dd className="text-sm font-semibold text-white">Public only</dd>
												</div>
												<div className="flex items-center justify-between gap-4">
													<dt className="text-sm text-white/70">Map layer</dt>
													<dd className="text-sm font-semibold text-white">Verified</dd>
												</div>
												<div className="flex items-center justify-between gap-4">
													<dt className="text-sm text-white/70">Declassified</dt>
													<dd className="text-sm font-semibold text-white/70">Locked</dd>
												</div>
											</dl>

											<div className="mt-5 h-px bg-white/10" />

											<p className="mt-4 text-xs leading-5 text-white/65">Additional layers will appear as the series expands.</p>
										</div>
									</div>

									{/* Bottom hint row (mobile) */}
									<div className="mt-10 flex flex-wrap items-center justify-between gap-3 sm:hidden">
										<span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">ACCESS: PUBLIC</span>
										<span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">SIGNAL: STABLE</span>
									</div>
								</div>

								{/* Inner screen gloss */}
								<div className="pointer-events-none absolute inset-0">
									<div className="absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-white/10 via-transparent to-transparent opacity-30" />
									<div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white/10 to-transparent opacity-30" />
								</div>
							</div>
						</div>

						{/* Small “camera dot” */}
						<div className="pointer-events-none absolute left-1/2 top-3.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/30 ring-1 ring-white/10" />
					</div>
				</div>
			</div>
		</div>
	);
}

const UniversePage = () => {
	return (
		<MainLayout
			heroTitle="Beyond the Story"
			heroSubtitle="OFFICIAL UNIVERSE ARCHIVE"
			heroText="An expanded reference of the worlds, forces, and sciences that shape Broken Horizons."
			heroCta="ACCESS THE ARCHIVES"
			heroBg={universeBG}
			ctaHref="#archives"
			logoCloud={false}
			fullScreen={true}
		>
			<Container
				id="universe"
				className=""
			>
				<TabletStandby />
			</Container>
		</MainLayout>
	);
};

export default UniversePage;
