import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { RequireAuth } from "@/components/auth/RequireAuth";

function HomePage() {
  return (
    <RequireAuth>
      <Landing />
    </RequireAuth>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanitana AI — Presentation Intelligence" },
      {
        name: "description",
        content:
          "Search, understand and interact with every PowerPoint across OneDrive and SharePoint — instantly, through AI.",
      },
      { property: "og:title", content: "Sanitana AI — Presentation Intelligence" },
      {
        property: "og:description",
        content:
          "An AI knowledge workspace for your organization's presentations. One conversation away from every insight.",
      },
    ],
  }),
  component: HomePage,
});
