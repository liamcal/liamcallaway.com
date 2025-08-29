import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
});
