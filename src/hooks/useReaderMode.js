import { useState, useEffect } from "react";

/**
 * useReaderMode - Custom hook for managing spoiler protection state
 * Synchronizes reader mode across all components using localStorage
 *
 * @returns {[boolean, Function]} - [readerMode state, setReaderMode function]
 *
 * Features:
 * - Persists state to localStorage
 * - Syncs across browser tabs/windows
 * - Default: true (spoilers hidden)
 */
export function useReaderMode() {
	// ========================================================================
	// STATE MANAGEMENT
	// ========================================================================

	/**
	 * Reader mode state - controls spoiler visibility
	 * Persisted to localStorage with key: "bh_reader_mode"
	 * Default: true (spoilers protected)
	 */
	const [readerMode, setReaderMode] = useState(() => {
		try {
			const saved = localStorage.getItem("bh_reader_mode");
			return saved !== null ? saved === "1" : true;
		} catch {
			return true;
		}
	});

	// ========================================================================
	// PERSISTENCE
	// ========================================================================

	/**
	 * Persist reader mode changes to localStorage
	 * Runs whenever readerMode state changes
	 */
	useEffect(() => {
		try {
			localStorage.setItem("bh_reader_mode", readerMode ? "1" : "0");
		} catch {
			// Silently fail if localStorage is unavailable
		}
	}, [readerMode]);

	// ========================================================================
	// CROSS-TAB SYNCHRONIZATION
	// ========================================================================

	/**
	 * Sync reader mode across browser tabs/windows
	 * Listens for storage events from other tabs
	 */
	useEffect(() => {
		const handleStorageChange = (event) => {
			// Only respond to changes for our specific key
			if (event.key === "bh_reader_mode" && event.newValue !== null) {
				setReaderMode(event.newValue === "1");
			}
		};

		// Listen for storage events
		window.addEventListener("storage", handleStorageChange);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return [readerMode, setReaderMode];
}
