import { createFileRoute } from "@tanstack/react-router";
import { ChatPage } from "@/components/chat/ChatPage";
import { RequireAuth } from "@/components/auth/RequireAuth";

function Chat() {
  return (
    <RequireAuth>
      <ChatPage />
    </RequireAuth>
  );
}

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat — Sanitana AI" },
      {
        name: "description",
        content: "Ask Sanitana AI about any presentation across OneDrive and SharePoint.",
      },
    ],
  }),
  component: Chat,
});
