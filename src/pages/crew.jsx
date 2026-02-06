import { Container } from "@/components/container";
import { CrewRoster } from "@/components/crew/crew-roster";
import { Heading } from "@/components/text";
import MainLayout from "@/layouts/main-layout";
import crewBg from "@/assets/images/crew-bg.jpg";
import { useState } from "react";
import clsx from "clsx";
import { useReaderMode } from "@/hooks/useReaderMode"; // Import the shared hook

// ============================================================================
// HERO DATA
// ============================================================================

const heroData = {
	title: "The Ones Who Went First",
	subtitle: "MEET THE CREW OF THE NIÑA",
	text: "Not heroes. Not legends. Just people sent beyond charted space, carrying their doubts, their scars, and the quiet hope that the universe would make sense.",
	cta: "LEARN MORE ABOUT THE CREW",
};

// ============================================================================
// DIALOG COMPONENTS
// ============================================================================

/**
 * ConfirmationDialog - Modal dialog for confirming classified file access
 * Warns users about spoilers before disabling reader mode
 * Features:
 * - Backdrop with blur effect
 * - Warning icon
 * - Clear messaging about spoilers
 * - Cancel and confirm actions
 */
function ConfirmationDialog({ isOpen, onConfirm, onCancel }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop - click to close */}
			<div
				className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
				onClick={onCancel}
			/>

			{/* Dialog card */}
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

				{/* Warning message */}
				<p className="mb-4 text-center text-sm leading-relaxed text-neutral-950/70 sm:text-base">
					This file contains <span className="font-semibold text-amber-600">classified information and story spoilers</span>. Information revealed may impact
					your reading experience.
				</p>
				<p className="mb-6 text-center text-sm leading-relaxed text-neutral-950/70 sm:text-base">Are you sure you want to proceed?</p>

				{/* Action buttons */}
				<div className="flex flex-col gap-3 sm:flex-row">
					{/* Cancel button */}
					<button
						type="button"
						onClick={onCancel}
						className="cursor-pointer flex-1 rounded-full border border-neutral-950/10 bg-neutral-950/5 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition hover:bg-neutral-950/10 sm:text-base"
					>
						Cancel
					</button>

					{/* Confirm button */}
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

// ============================================================================
// SPOILER GUARD COMPONENT
// ============================================================================

/**
 * SpoilerGuard - Toggle button for revealing hidden crew member
 * Features:
 * - Shows confirmation dialog before revealing spoilers
 * - Changes appearance based on reader mode state
 * - No confirmation needed when hiding spoilers again
 */
function SpoilerGuard({ readerMode, setReaderMode, className }) {
	const [showDialog, setShowDialog] = useState(false);

	/**
	 * Handle button click
	 * - If revealing spoilers (reader mode ON): show confirmation dialog
	 * - If hiding spoilers (reader mode OFF): toggle immediately
	 */
	const handleClick = () => {
		if (readerMode) {
			// Revealing spoilers - show confirmation
			setShowDialog(true);
		} else {
			// Hiding spoilers - no confirmation needed
			setReaderMode(true);
		}
	};

	/**
	 * Handle confirmation - reveal spoilers and close dialog
	 */
	const handleConfirm = () => {
		setReaderMode(false);
		setShowDialog(false);
	};

	/**
	 * Handle cancellation - close dialog without revealing
	 */
	const handleCancel = () => {
		setShowDialog(false);
	};

	return (
		<>
			<button
				type="button"
				onClick={handleClick}
				className={clsx(
					"cursor-pointer rounded-full border px-6 py-3 text-sm font-bold tracking-wider uppercase transition duration-300 ease-in-out",
					readerMode
						? "border-neutral-950/10 bg-neutral-950/5 text-green-600 shadow-sm hover:bg-neutral-950/10"
						: "border-neutral-950/10 bg-neutral-950/5 text-red-600 shadow-inner/55 hover:bg-neutral-950/10",
					className,
				)}
			>
				Spoiler Guard
			</button>

			{/* Confirmation dialog */}
			<ConfirmationDialog
				isOpen={showDialog}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
			/>
		</>
	);
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

/**
 * CrewPage - Main crew roster page
 * Features:
 * - Hero section with background image
 * - Page heading and description
 * - Spoiler guard toggle (desktop: aligned right, mobile: centered)
 * - Crew roster with split animation
 * - Reader mode synced across all pages via useReaderMode hook
 */
export default function CrewPage() {
	// ========================================================================
	// STATE MANAGEMENT
	// ========================================================================

	/**
	 * Use shared reader mode hook
	 * This syncs reader mode state across:
	 * - This page (crew roster)
	 * - Detail pages (individual crew members)
	 * - All browser tabs/windows
	 */
	const [readerMode, setReaderMode] = useReaderMode();

	// ========================================================================
	// RENDER
	// ========================================================================

	return (
		<MainLayout
			heroTitle={heroData.title}
			heroSubtitle={heroData.subtitle}
			heroText={heroData.text}
			heroCta={heroData.cta}
			heroBg={crewBg}
		>
			<Container>
				{/* Page header with spoiler guard */}
				<div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
					{/* Left side: Title and description */}
					<div className="flex flex-col">
						<Heading
							as="h1"
							className="mt-2 max-w-3xl"
						>
							Meet the Crew
						</Heading>
						<p className="mt-4 max-w-2xl text-sm/6 text-gray-600">
							Log files of the <span className="font-medium">UNS Niña</span>. Profiles, backgrounds, and scene fragments. Access partially restricted.
						</p>
					</div>

					{/* Right side: Spoiler Guard toggle (hidden on mobile) */}
					<div className="hidden sm:block">
						<SpoilerGuard
							readerMode={readerMode}
							setReaderMode={setReaderMode}
						/>
					</div>
				</div>

				{/* Mobile: Centered Spoiler Guard */}
				<div className="mb-8 flex justify-center sm:hidden">
					<SpoilerGuard
						readerMode={readerMode}
						setReaderMode={setReaderMode}
					/>
				</div>

				{/* Crew roster grid */}
				<CrewRoster readerMode={readerMode} />
			</Container>
		</MainLayout>
	);
}
