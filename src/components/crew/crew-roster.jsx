import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CrewDetails from "./crew-details";

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

/**
 * StatusPill - Displays crew member status with color-coded styling
 * @param {string} status - Member status: "Active", "Injured", or other
 * Returns a pill-shaped badge with appropriate color scheme
 */
function StatusPill({ status }) {
	// Determine styling based on status
	const styles =
		status === "Active"
			? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
			: status === "Injured"
				? "border-amber-400/25 bg-amber-400/10 text-amber-200"
				: "border-white/15 bg-white/5 text-white/70"; // Default/Unknown status

	return <span className={clsx("inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide", styles)}>{status}</span>;
}

// ============================================================================
// CARD COMPONENTS
// ============================================================================

/**
 * CrewCard - Individual crew member card with portrait, details, and preview
 * Features:
 * - Portrait image with hover zoom effect
 * - Status indicator
 * - Role, name, and basic info
 * - Tags for quick identification
 * - Scene fragment preview (if available)
 * - Special rounded corners for corner positions in grid
 */
function CrewCard({ member, isRevealed, position }) {
	// Determine animation class based on position and reveal state
	const getAnimationClass = () => {
		if (isRevealed === null) return ""; // Initial state, no animation

		// Top row cards stay in place - no animation
		if (position === "top") {
			return "";
		}
		// Bottom row cards move down when revealed
		if (position === "bottom") {
			return isRevealed ? "translate-y-20" : "translate-y-0";
		}
		return "";
	};

	return (
		<Link
			to={`/crew/${member.slug}`}
			className={clsx(
				"group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 shadow-md transition-all duration-700 ease-out",
				getAnimationClass(),
				// Special corner rounding for specific positions in the grid
				member.callSign === "RAJ" && "lg:rounded-bl-4xl", // Bottom-left
				member.callSign === "KATI" && "lg:rounded-br-4xl", // Bottom-right
				member.callSign === "MERCER" && "lg:rounded-tl-4xl", // Top-left
				member.callSign === "LEX" && "lg:rounded-tr-4xl", // Top-right
			)}
		>
			{/* ============================================================ */}
			{/* PORTRAIT SECTION */}
			{/* ============================================================ */}
			<div className="relative h-80 shrink-0 overflow-hidden">
				{/* Portrait image with zoom effect on hover */}
				<img
					src={member.image?.src || member.image}
					alt={member.name}
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
				/>

				{/* Gradient overlay for smooth transition to content */}
				<div className="absolute inset-0 bg-linear-to-b from-transparent from-80% to-white" />

				{/* Status badge positioned in top-right corner */}
				<div className="absolute top-4 right-4">
					<StatusPill status={member.personal?.status || member.status} />
				</div>
			</div>

			{/* ============================================================ */}
			{/* CONTENT SECTION */}
			{/* ============================================================ */}
			<div className="relative p-6">
				{/* Role and callsign */}
				<p className="text-xs font-semibold tracking-wider text-gray-500 uppercase font-mono">
					{member.role}
					{member.callsign && ` • ${member.callsign}`}
				</p>

				{/* Member name */}
				<h3 className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950">{member.name}</h3>

				{/* Basic information grid */}
				<div className="mt-4 space-y-2 text-sm/6 text-gray-600">
					{/* Place of birth / origin */}
					<p>
						<span className="font-medium text-gray-700">Origin:</span> {member.personal?.pob || member.origin}
					</p>

					{/* Specialty - prioritize quick array data, fallback to specialty field */}
					<p>
						<span className="font-medium text-gray-700">Specialty:</span> {member.quick?.find((item) => item.k === "Specialty")?.v || member.specialty || "—"}
					</p>
				</div>

				{/* Tags section - show up to 3 tags */}
				{member.tags?.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{member.tags.slice(0, 3).map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] text-gray-600"
							>
								{tag}
							</span>
						))}
					</div>
				)}

				{/* Scene fragment preview - shows first gallery image if available */}
				{member.gallery?.[0] && (
					<div className="mt-4 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
						{/* Thumbnail */}
						<div className="relative h-10 w-14 overflow-hidden rounded border border-gray-200">
							<img
								src={member.gallery[0].src?.src || member.gallery[0].src}
								alt=""
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</div>

						{/* Preview text */}
						<div className="min-w-0">
							<p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase">Scene fragment</p>
							<p className="truncate text-xs text-gray-600">Open file → view key moments</p>
						</div>
					</div>
				)}
			</div>
		</Link>
	);
}

/**
 * SadieRevealCard - Special wide card for SADIE that appears when spoiler guard is disabled
 * Spans 3 columns and features enhanced styling
 */
function SadieRevealCard({ member, isRevealed }) {
	if (!member) return null;

	return (
		<div
			className={clsx("lg:col-span-3 transition-all duration-700 ease-out", isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none")}
		>
			<Link
				to={`/crew/${member.slug}`}
				className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-linear-to-br from-purple-950 via-indigo-950 to-blue-950 ring-1 ring-white/10 shadow-2xl transition-all hover:ring-white/20"
			>
				{/* Portrait Section - Takes up left side on desktop */}
				<div className="relative h-96 lg:h-auto lg:w-2/5 shrink-0 overflow-hidden">
					<img
						src={member.image?.src || member.image}
						alt={member.name}
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
					/>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-purple-950/80 lg:to-purple-950" />

					{/* Status badge */}
					<div className="absolute top-4 right-4">
						<StatusPill status={member.personal?.status || member.status} />
					</div>

					{/* Classified banner */}
					<div className="absolute bottom-4 left-4 right-4 lg:left-auto lg:right-4">
						<div className="rounded-lg border border-amber-400/30 bg-amber-950/80 px-3 py-2 backdrop-blur-sm">
							<p className="text-xs font-bold tracking-wider text-amber-200 uppercase">⚠ Classified Information</p>
						</div>
					</div>
				</div>

				{/* Content Section - Takes up right side on desktop */}
				<div className="relative flex-1 p-8 lg:p-10">
					{/* Role and callsign */}
					<p className="text-sm font-semibold tracking-wider text-purple-300 uppercase font-mono">
						{member.role}
						{member.callsign && ` • ${member.callsign}`}
					</p>

					{/* Member name */}
					<h3 className="mt-2 text-4xl font-bold tracking-tight text-white">{member.name}</h3>

					{/* Logline or description */}
					{member.logline && <p className="mt-4 text-base leading-relaxed text-purple-100/90">{member.logline}</p>}

					{/* Basic information */}
					<div className="mt-6 space-y-3 text-sm text-purple-100/80">
						<p>
							<span className="font-semibold text-purple-200">Origin:</span> {member.personal?.pob || member.origin}
						</p>
						<p>
							<span className="font-semibold text-purple-200">Specialty:</span>{" "}
							{member.quick?.find((item) => item.k === "Specialty")?.v || member.specialty || "—"}
						</p>
					</div>

					{/* Tags */}
					{member.tags?.length > 0 && (
						<div className="mt-6 flex flex-wrap gap-2">
							{member.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-xs font-medium text-purple-200"
								>
									{tag}
								</span>
							))}
						</div>
					)}

					{/* Call to action */}
					<div className="mt-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-100 transition-colors group-hover:border-purple-400/50 group-hover:bg-purple-400/20">
							<span>View Full Profile</span>
							<svg
								className="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * CrewRoster - Main roster grid displaying all crew members
 * Features:
 * - Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
 * - Spoiler guard to reveal hidden crew member (SADIE)
 * - Split animation when revealing SADIE
 * - Special corner styling for grid edges
 *
 * @param {boolean} readerMode - Controls SADIE visibility (managed by parent)
 */
export function CrewRoster({ readerMode, className }) {
	// ========================================================================
	// STATE MANAGEMENT
	// ========================================================================

	// Track if this is the initial render (to prevent animation on page load)
	const [isInitialRender, setIsInitialRender] = useState(true);

	// Mark initial render as complete
	useEffect(() => {
		// Utiliser setTimeout pour éviter l'update synchrone
		const timer = setTimeout(() => {
			setIsInitialRender(false);
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	// ========================================================================
	// DATA PREPARATION
	// ========================================================================

	// Find SADIE
	const sadie = CrewDetails.find((member) => member.callSign === "SADIE");

	// Filter out SADIE from main crew list
	const regularCrew = CrewDetails.filter((member) => member.callSign !== "SADIE");

	// Determine animation state (null = no animation, true/false = animate)
	const revealState = isInitialRender ? null : !readerMode;

	// ========================================================================
	// RENDER
	// ========================================================================

	return (
		<section className={clsx("relative pb-20", className)}>
			{/* Crew Grid with Split Animation */}
			<div className="relative space-y-4">
				{/* Top Row - First 3 cards */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{regularCrew.slice(0, 3).map((member) => (
						<CrewCard
							key={member.slug}
							member={member}
							isRevealed={revealState}
							position="top"
						/>
					))}
				</div>

				{/* SADIE's Reveal Card - positioned between rows */}
				{!readerMode && (
					<div className="mt-6 -mb-14">
						<SadieRevealCard
							member={sadie}
							isRevealed={revealState}
						/>
					</div>
				)}

				{/* Bottom Row - Last 3 cards */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{regularCrew.slice(3).map((member) => (
						<CrewCard
							key={member.slug}
							member={member}
							isRevealed={revealState}
							position="bottom"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
