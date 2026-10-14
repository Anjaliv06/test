import { createFileRoute } from "@tanstack/react-router";
import { EntraLogin } from "@/components/auth/EntraLogin";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Sanitana AI" },
      {
        name: "description",
        content: "Sign in to Sanitana AI with your organization's Microsoft Entra ID account.",
      },
    ],
  }),
  component: EntraLogin,
});
