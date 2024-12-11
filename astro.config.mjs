import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://bsit-software-architecture-2024.github.io/Louis-docs/",
  base: "/Louis-docs",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "DCCO Admin Panel Fullstack",
          autogenerate: { directory: "dccp-admin-panel-fullstack" },
        },

        {
          label: "DCCP Portal Web Client",
          autogenerate: { directory: "dccp-portal-webclient" },
        },
        {
          label: "DCCP Portal Server",
          autogenerate: { directory: "dccp-portal-server-api" },
        },
      ],
    }),
  ],
});
