import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "starlight-theme-catppuccin";
// https://astro.build/config
export default defineConfig({
  site: "https://bsit-software-architecture-2024.github.io/Louis-docs/",
  base: "/Louis-docs",
  integrations: [
    starlight({
      title: "My Docs",
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
      plugins: [catppuccin()],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "What I Learned",
          autogenerate: { directory: "learning" },
        },
        {
          label: "Contributions",
          autogenerate: { directory: "contributions" },
        },
      ],
    }),
  ],
});
