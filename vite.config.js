import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			"@": path.resolve("src"),
		},
	},
	optimizeDeps: {
		include: ["framer-motion"],
	},
	build: {
		commonjsOptions: {
			include: [/node_modules/],
		},
	},
});
