import MainLayout from "@/layouts/main-layout";
import { Container } from "@/components/container";
import constructionBg from "@/assets/images/constructionbg.jpg";

// ============================================================================
// HERO DATA
// ============================================================================

const heroData = {
	title: "Coming Soon",
	subtitle: "SYSTEM MAINTENANCE IN PROGRESS",
	text: "We're working hard to bring you something amazing. ",
	cta: "RETURN TO HOME",
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * UnderConstructionPage - Placeholder page for sections under development
 * Features:
 * - Hero section with construction messaging
 * - Animated construction icon
 * - Progress indicator
 * - Estimated completion message
 * - Call to action to return home or explore other sections
 */
export default function UnderConstructionPage() {
	return (
		<MainLayout
			heroTitle={heroData.title}
			heroSubtitle={heroData.subtitle}
			heroText={heroData.text}
			heroCta={heroData.cta}
			heroBg={constructionBg}
		>
			<Container>
				{/* Main construction message */}
				<div className="mx-auto max-w-4xl text-center">
					{/* Construction icon */}
					<div className="mb-8 flex justify-center">
						<div className="relative">
							{/* Animated pulsing background */}
							<div className="absolute inset-0 rounded-full bg-indigo-400/20 animate-ping" />

							{/* Icon container */}
							<div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-indigo-900 shadow-2xl">
								{/* Construction icon - hammer and wrench */}
								<svg
									className="h-16 w-16 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
						</div>
					</div>

					{/* Main heading */}
					<h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">Building Something Special</h1>

					{/* Description */}
					<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
						This page is currently under construction. Our team is working diligently to bring you an exceptional experience. Please check back soon!
					</p>

					{/* Progress bar */}
					<div className="mt-10">
						<div className="mb-2 flex justify-between text-sm font-medium text-gray-700">
							<span>Progress</span>
							<span>65%</span>
						</div>
						<div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
							<div className="h-full w-[65%] rounded-full bg-linear-to-r from-indigo-400 to-indigo-600 transition-all duration-500" />
						</div>
					</div>

					{/* Status cards */}
					<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
						{/* Card 1: Design */}
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
								<svg
									className="h-6 w-6 text-green-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900">Design</h3>
							<p className="mt-2 text-sm text-gray-600">Completed</p>
						</div>

						{/* Card 2: Development */}
						<div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
							<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
								<svg
									className="h-6 w-6 text-indigo-600 animate-spin"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900">Development</h3>
							<p className="mt-2 text-sm text-gray-600">In Progress</p>
						</div>

						{/* Card 3: Testing */}
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
								<svg
									className="h-6 w-6 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900">Testing</h3>
							<p className="mt-2 text-sm text-gray-600">Pending</p>
						</div>
					</div>

					{/* Estimated completion */}
					<div className="mt-12 rounded-3xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-8 shadow-sm">
						<div className="flex items-center justify-center gap-3">
							<svg
								className="h-6 w-6 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<p className="text-lg font-medium text-gray-900">
								Estimated Completion: <span className="font-bold text-indigo-600">Coming Soon</span>
							</p>
						</div>
					</div>

					{/* Call to action buttons */}
					<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="/"
							className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Return to Home
						</a>
						<a
							href="/crew"
							className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
						>
							Explore the Crew
						</a>
					</div>
				</div>
			</Container>
		</MainLayout>
	);
}
