import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Initialize PostHog only if token is available
const posthogKey = import.meta.env.VITE_POSTHOG_KEY || "phc_rU4g6MRoF4snx1Uyh2NDbjtX9EgZJgZzkmzkSvYirCX";
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    person_profiles: "identified_only",
  });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
