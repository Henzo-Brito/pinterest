import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@comp": path.resolve(__dirname, "src/components"),
			"@img": path.resolve(__dirname, "src/images"),
			"@store": path.resolve(__dirname, "src/store"),
		},
	},
});
