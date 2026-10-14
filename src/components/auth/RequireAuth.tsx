import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { isAuthenticated } from "@/lib/auth";

export function RequireAuth({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      setReady(true);
    } else {
      navigate({ to: "/login", replace: true });
    }
  }, [navigate]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background bg-mesh">
        <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-ink-soft">
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-teal border-t-transparent" />
          Checking your session…
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
