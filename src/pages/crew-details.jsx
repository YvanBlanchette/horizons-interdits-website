import clsx from "clsx";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import { Button } from "@/components/button";
import CrewDetails from "@/components/crew/crew-details";
import { Link } from "react-router-dom";

import gecoSeal from "@/assets/images/geco.svg";
import MainLayout from "../layouts/main-layout";
import { useReaderMode } from "@/hooks/useReaderMode";

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

/**
 * StatPill - Displays a key-value pair in a pill-shaped container
 * Used for displaying stats like height, weight, DOB, etc.
 */
function StatPill({ k, v }) {
	return (
		<div className="rounded-2xl border border-neutral-950/10 bg-white px-4 py-3 shadow-sm">
			<div className="text-[11px] font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-xs">{k}</div>
			<div className="mt-1 text-sm font-medium wrap-break-word text-neutral-950 sm:text-[15px]">{v ?? "—"}</div>
		</div>
	);
}

/**
 * Section - Wrapper component for content sections with optional title
 * Provides consistent styling across different sections
 */
function Section({ title, id, children, className }) {
	return (
		<section
			id={id}
			className={clsx("mb-10 rounded-3xl bg-neutral-100 p-5 shadow-inner/55 sm:p-6 lg:p-8", className)}
		>
			{title && <h3 className="text-base font-semibold tracking-wider text-neutral-950/60 uppercase sm:text-lg">{title}</h3>}

			<div className={clsx(title && "mt-4", "flex flex-col flex-1 min-h-0")}>{children}</div>
		</section>
	);
}

/**
 * BulletList - Renders an array of items as a bulleted list
 * Used for displaying restrictions, notes, and other list content
 */
function BulletList({ items }) {
	if (!items?.length) return null;

	return (
		<ul className="space-y-3 text-sm leading-6 text-neutral-950/80 sm:text-base">
			{items.map((item, index) => (
				<li
					key={index}
					className="flex gap-3"
				>
					<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950/60" />
					<span className="wrap-break-word">{item}</span>
				</li>
			))}
		</ul>
	);
}

/**
 * TextBlock - Renders plain text content with proper formatting
 * Handles multi-line text with whitespace preservation
 */
function TextBlock({ text }) {
	if (!text) return null;

	return <p className="max-w-none text-sm leading-7 whitespace-pre-line text-neutral-950 sm:text-base">{text}</p>;
}

/**
 * ConfirmationDialog - Modal dialog for confirming classified file access
 * Warns users about spoilers before disabling reader mode
 */
function ConfirmationDialog({ isOpen, onConfirm, onCancel }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
				onClick={onCancel}
			/>

			{/* Dialog */}
			<div className="relative z-10 w-full max-w-md rounded-3xl border border-neutral-950/10 bg-white p-6 shadow-2xl sm:p-8">
				{/* Warning icon */}
				<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
					<svg
						className="h-8 w-8 text-amber-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				</div>

				{/* Title */}
				<h3 className="mb-2 text-center text-xl font-bold tracking-wider text-neutral-950 uppercase sm:text-2xl">Classified Access Warning</h3>

				{/* Message */}
				<p className="mb-4 text-center text-sm leading-relaxed text-neutral-950/70 sm:text-base">
					This file contains <span className="font-semibold text-amber-600">classified information and story spoilers</span>. Information revealed may impact
					your reading experience.
				</p>
				<p className="mb-6 text-center text-sm leading-relaxed text-neutral-950/70 sm:text-base"> Are you sure you want to proceed?</p>

				{/* Buttons */}
				<div className="flex flex-col gap-3 sm:flex-row">
					<button
						type="button"
						onClick={onCancel}
						className="cursor-pointer flex-1 rounded-full border border-neutral-950/10 bg-neutral-950/5 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition hover:bg-neutral-950/10 sm:text-base"
					>
						Cancel
					</button>
					<button
						type="button"
						onClick={onConfirm}
						className="cursor-pointer flex-1 rounded-full border border-amber-600/20 bg-amber-600 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition hover:bg-amber-700 sm:text-base"
					>
						I Understand
					</button>
				</div>
			</div>
		</div>
	);
}

/**
 * SpoilerGuard - Toggle button for reader mode (spoiler protection)
 * Changes appearance based on whether spoilers are hidden or visible
 */
function SpoilerGuard({ readerMode, setReaderMode, className }) {
	const [showDialog, setShowDialog] = useState(false);

	const handleClick = () => {
		// If turning OFF reader mode (revealing spoilers), show confirmation
		if (readerMode) {
			setShowDialog(true);
		} else {
			// If turning ON reader mode (hiding spoilers), no confirmation needed
			setReaderMode(true);
		}
	};

	const handleConfirm = () => {
		setReaderMode(false);
		setShowDialog(false);
	};

	const handleCancel = () => {
		setShowDialog(false);
	};

	return (
		<>
			<button
				type="button"
				onClick={handleClick}
				className={clsx(
					"cursor-pointer rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase transition duration-300 ease-in-out sm:px-5 sm:py-2.5 sm:text-base",
					readerMode
						? "border-neutral-950/10 bg-neutral-950/5 text-green-400 shadow-sm active:shadow-inner/55"
						: "border-neutral-950/10 bg-neutral-950/5 text-red-600 shadow-inner/55",
					className,
				)}
			>
				Spoiler Guard
			</button>

			<ConfirmationDialog
				isOpen={showDialog}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		</>
	);
}

// ============================================================================
// CARD COMPONENTS
// ============================================================================

/**
 * DossierCard - Displays GECO dossier information for a crew member
 * Includes file details, oversight info, restrictions, and background
 */
function DossierCard({ dossier }) {
	if (!dossier) return null;

	return (
		<>
			{/* Main dossier card with file info and oversight */}
			<div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6">
				<p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">GECO dossier</p>

				{/* File information grid */}
				<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{dossier.fileId && (
						<StatPill
							k="File ID"
							v={dossier.fileId}
						/>
					)}
					{dossier.status && (
						<StatPill
							k="Status"
							v={dossier.status}
						/>
					)}
					{dossier.division && (
						<StatPill
							k="Division"
							v={dossier.division}
						/>
					)}
					{dossier.primaryAsset && (
						<StatPill
							k="Primary asset"
							v={dossier.primaryAsset}
						/>
					)}
				</div>

				{/* Oversight and restrictions section */}
				{dossier.oversight && (
					<div className="mt-6">
						<p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">Oversight and restrictions</p>

						<div className="mt-3 space-y-2 text-sm text-neutral-950/80 sm:text-base">
							{dossier.oversight.medical && (
								<p>
									<span className="font-semibold">Medical:</span> <span className="wrap-break-word">{dossier.oversight.medical}</span>
								</p>
							)}

							{dossier.oversight.psychological && (
								<p>
									<span className="font-semibold">Psych:</span> <span className="wrap-break-word">{dossier.oversight.psychological}</span>
								</p>
							)}

							{dossier.oversight.restrictions?.length > 0 && (
								<div className="pt-2">
									<BulletList items={dossier.oversight.restrictions} />
								</div>
							)}
						</div>
					</div>
				)}

				{/* Internal notes section */}
				{dossier.notes?.length > 0 && (
					<div className="mt-6">
						<p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">Internal notes</p>
						<div className="mt-3">
							<BulletList items={dossier.notes} />
						</div>
					</div>
				)}
			</div>

			{/* Background card */}
			<div className="mt-4 rounded-3xl border border-neutral-950/10 bg-white p-4 sm:p-6 shadow-sm">
				<p className="mb-3 text-xs font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-sm">Background</p>
				{dossier.background ? (
					<TextBlock text={dossier.background} />
				) : (
					<p className="max-w-none text-sm leading-7 whitespace-pre-line text-neutral-950 sm:text-base">No informations available</p>
				)}
			</div>
		</>
	);
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * renderStructuredSections - Renders dynamic sections based on visibility rules
 * Filters out locked sections and spoiler-protected content based on reader mode
 * @param {Array} sections - Array of section objects with title, kind, content, and visibility
 * @param {boolean} readerMode - Whether spoiler protection is enabled
 */
function renderStructuredSections(sections, readerMode) {
	if (!sections?.length) return null;

	// Filter sections based on visibility and reader mode
	const visibleSections = sections.filter((section) => {
		if (!section) return false;
		if (section.visibility === "locked") return false;
		if (readerMode && section.visibility === "spoiler") return false;
		return true;
	});

	if (!visibleSections.length) return null;

	return (
		<div className="space-y-6">
			{visibleSections.map((section, index) => {
				const title = section.title || `SECTION ${index + 1}`;
				const kind = section.kind || "text";
				const content = section.content;

				return (
					<div
						key={`${title}-${index}`}
						className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-sm sm:p-6"
					>
						<p className="text-xs font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-sm">{title}</p>
						<div className="mt-4">
							{kind === "bullets" ? (
								<BulletList items={Array.isArray(content) ? content : []} />
							) : kind === "text" ? (
								<TextBlock text={typeof content === "string" ? content : ""} />
							) : null}
						</div>
					</div>
				);
			})}
		</div>
	);
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * CrewMemberDetailPage - Main component for displaying detailed crew member information
 * Features:
 * - Personal information and biography
 * - Classified GECO dossier information
 * - Reader mode (spoiler protection) synced across all pages
 * - Responsive design for mobile/tablet/desktop
 */
export default function CrewMemberDetailPage() {
	const { slug } = useParams();

	// ========================================================================
	// STATE MANAGEMENT
	// ========================================================================

	/**
	 * Use shared reader mode hook
	 * This syncs reader mode state across:
	 * - Crew roster page
	 * - All crew member detail pages
	 * - All browser tabs/windows
	 */
	const [readerMode, setReaderMode] = useReaderMode();

	// State for confirmation dialog
	const [showConfirmDialog, setShowConfirmDialog] = useState(false);

	// Note: localStorage persistence is now handled by useReaderMode hook

	// ========================================================================
	// DATA FETCHING
	// ========================================================================

	/**
	 * Find crew member data based on URL slug
	 * Memoized to prevent unnecessary re-computation
	 */
	const member = useMemo(() => {
		if (!slug) return null;
		return CrewDetails.find((crew) => crew.slug === slug) || null;
	}, [slug]);

	// ========================================================================
	// COMPUTED VALUES
	// ========================================================================

	const crewHeader = member?.header;
	const personal = member?.personal;

	// Determine if content should be hidden due to reader mode
	const isHiddenByReaderMode = !!member && readerMode && (member.slug === "sadie" || member.isSpoilerSensitive);

	// Seal size changes based on reader mode (larger when locked)
	const sealSize = readerMode ? 200 : 125;

	// ========================================================================
	// RENDER
	// ========================================================================

	return (
		<MainLayout
			heroTitle={member?.name}
			heroSubtitle={member?.role}
			heroText={member?.logline}
			heroCta="CLASSIFIED INFORMATIONS"
			heroBg={crewHeader}
		>
			{/* Page title */}
			{member && <h1 className="font-display mb-8 text-center text-4xl font-semibold sm:text-6xl lg:text-6xl">{member.name}</h1>}

			{/* Error state: member not found */}
			{!member ? (
				<div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-6 text-neutral-950/80 sm:p-10">Crew member not found.</div>
			) : isHiddenByReaderMode ? (
				/* Locked state: reader mode blocking spoiler-sensitive content */
				<div className="rounded-4xl border border-neutral-950/10 bg-neutral-950/5 p-6 sm:p-10 flex flex-col items-center justify-center">
					<h2 className="text-lg font-bold text-neutral-950 sm:text-xl uppercase">Profile locked by Reader Mode</h2>
					<p className="mt-2 max-w-3xl text-sm text-neutral-950/70 sm:text-base">
						This dossier contains information best discovered in the story. Disable Reader Mode to access it.
					</p>
					<div className="mt-6">
						<span
							type="button"
							className="cursor-pointer hover:shadow-none active:shadow-inner/55 text-red-600 font-bold tracking-widest uppercase rounded-full bg-neutral-100 px-4 py-2 sm:px-6 sm:py-3 shadow-md border border-neutral-950/10"
							onClick={() => setShowConfirmDialog(true)}
						>
							Disable Spoiler Guard
						</span>
					</div>

					<ConfirmationDialog
						isOpen={showConfirmDialog}
						onConfirm={() => {
							setReaderMode(false);
							setShowConfirmDialog(false);
						}}
						onCancel={() => setShowConfirmDialog(false)}
					/>
				</div>
			) : (
				/* Main content: two-column layout with personal info and bio */
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
					{/* ============================================================ */}
					{/* LEFT COLUMN: Image and personal information */}
					{/* ============================================================ */}
					<div className="lg:col-span-6 flex flex-col h-full">
						<div className="overflow-hidden rounded-4xl border border-neutral-950/10 bg-neutral-100 shadow-inner/55">
							{/* Member portrait image */}
							<div className="relative overflow-hidden bg-neutral-800 p-1 rounded-t-4xl">
								{member.image ? (
									<img
										src={member.image.src || member.image}
										alt={member.name}
										className="aspect-4/3 w-full object-cover brightness-110 sm:aspect-16/10 lg:aspect-4/3 p-1 bg-neutral-800 rounded-t-4xl"
									/>
								) : (
									<div className="aspect-4/3 w-full bg-neutral-50" />
								)}
								{/* Gradient overlay for smooth transition to content below */}
								<div className="absolute inset-0 bg-linear-to-b from-transparent from-80% via-transparent to-neutral-50" />
							</div>

							{/* Personal information section */}
							<div className="p-4 sm:p-5 lg:p-6">
								<p className="mb-4 text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">Personal information</p>

								{/* Full name and status */}
								<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
									<StatPill
										k="Full name"
										v={`${personal?.firstName ?? ""} ${personal?.middleName ?? ""} ${personal?.lastName ?? ""}`.replace(/\s+/g, " ").trim()}
									/>
									<StatPill
										k="Status"
										v={personal?.status}
									/>
								</div>

								{/* Birth information */}
								<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
									<StatPill
										k="Date of birth"
										v={personal?.dob}
									/>
									<StatPill
										k="Place of birth"
										v={personal?.pob}
									/>
								</div>

								{/* Physical characteristics */}
								<div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
									<StatPill
										k="Height"
										v={personal?.height}
									/>
									<StatPill
										k="Weight"
										v={personal?.weight}
									/>
									<StatPill
										k="Eyes"
										v={personal?.eyeColor}
									/>
									<StatPill
										k="Hair"
										v={personal?.hairColor}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* ============================================================ */}
					{/* RIGHT COLUMN: Quick stats and biography */}
					{/* ============================================================ */}
					<div className="lg:col-span-6 flex flex-col h-full">
						{/* Navigation and controls */}
						<div className="mb-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
							<Link
								to="/crew"
								className="inline-flex items-center justify-center rounded-full border border-neutral-950/10 bg-neutral-950/5 px-4 py-2 text-sm font-medium tracking-wider text-neutral-850 active:text-neutral-950 uppercase data-hover:bg-neutral-950/10 sm:px-5 sm:py-2.5 sm:text-base shadow-sm active:shadow-inner/55"
							>
								← Back to crew roster
							</Link>

							<div className="flex justify-center sm:justify-end">
								<SpoilerGuard
									readerMode={readerMode}
									setReaderMode={setReaderMode}
								/>
							</div>
						</div>

						{/* Biography section */}
						<div className="flex-1">
							<Section
								title=""
								id="bio"
								className="h-full flex flex-col"
							>
								{/* Quick stats (if available) */}
								{member.quick?.length > 0 && (
									<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
										{member.quick.map((stat) => (
											<StatPill
												key={stat.k}
												k={stat.k}
												v={stat.v}
											/>
										))}
									</div>
								)}

								{/* Biography text */}
								<div className="mt-4 rounded-3xl border border-neutral-950/10 bg-white p-4 shadow-sm sm:p-6 flex-1">
									<p className="mb-3 text-xs font-semibold tracking-wider text-neutral-950/45 uppercase sm:text-sm">Biography</p>
									<TextBlock text={member.bio} />
								</div>
							</Section>
						</div>
					</div>
				</div>
			)}

			{/* ================================================================ */}
			{/* CLASSIFIED SECTION: GECO Dossier and Additional Information */}
			{/* ================================================================ */}
			<div
				id="classified"
				className="mt-10"
			>
				<div className="relative min-h-[85vh] w-full rounded-3xl border border-neutral-800/5 bg-neutral-100 p-5 shadow-inner/55 sm:p-8 lg:p-10">
					{/* GECO seal and classification overlay */}
					<div
						className={clsx(
							"absolute flex flex-col items-center justify-center text-center",
							readerMode
								? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4" // Centered when locked
								: "top-6 right-6 items-end text-right sm:top-8 sm:right-8 lg:top-10 lg:right-10", // Top-right when unlocked
						)}
					>
						{/* GECO seal - double-click to toggle reader mode */}
						<img
							src={gecoSeal}
							alt="GECO seal"
							width={sealSize}
							height={sealSize}
							onDoubleClick={() => setReaderMode((prev) => !prev)}
							className={clsx(readerMode && "max-w-40 sm:max-w-none")}
						/>

						{/* Classification text - fades out when unlocked */}
						<div
							className={clsx(
								"mt-4 transition-all duration-200",
								readerMode ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0 select-none",
							)}
						>
							<p className="text-3xl font-black tracking-wider text-neutral-950 uppercase sm:text-5xl">GECO</p>
							<p className="text-base font-bold tracking-wider text-neutral-950 uppercase sm:text-xl">Galactic Exploration and Chartering Office</p>
							<p className="mb-2 text-sm sm:text-base">Intelligence Division · Personnel Archive</p>
							<p className="my-2 text-xl font-black tracking-wider text-neutral-950 uppercase sm:text-2xl">Classified</p>
							<p className="text-xs sm:text-sm">Classification: OMEGA-RESTRICTED</p>
							<p className="text-xs sm:text-sm">Clearance Required: GECO-L5</p>
						</div>
					</div>

					{/* Unlocked classified content */}
					{!readerMode && (
						<div className="pt-16 sm:pt-20 lg:pt-24">
							<h2 className="text-center text-xl font-semibold tracking-wider uppercase sm:text-3xl">Crew Member Profile</h2>
							<p className="mt-0 text-center text-sm sm:text-base">{member?.name}</p>

							<div className="mx-auto mt-8 max-w-5xl space-y-8 sm:mt-10">
								{/* GECO Dossier card */}
								{member?.dossier && <DossierCard dossier={member.dossier} />}

								{/* Additional structured sections */}
								{member?.sections?.length > 0 && renderStructuredSections(member.sections, readerMode)}

								{/* Image gallery */}
								{member?.gallery?.length > 0 && (
									<div className="rounded-3xl border border-neutral-950/10 bg-white p-5 shadow-inner/55 sm:p-6">
										<p className="text-xs font-semibold tracking-wider text-neutral-950/50 uppercase sm:text-sm">Scenes</p>

										<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
											{member.gallery.map((image, index) => (
												<div
													key={index}
													className="overflow-hidden rounded-2xl bg-black/10"
												>
													<img
														src={image.src?.src || image.src}
														alt={image.label || ""}
														className="aspect-16/10 w-full object-cover"
													/>
													{image.label && <div className="border-t border-neutral-950/10 px-4 py-3 text-sm text-neutral-950/70">{image.label}</div>}
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	);
}
