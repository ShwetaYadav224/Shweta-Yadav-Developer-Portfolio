import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// On every fresh load, land at the top (hero) — ignore any leftover #hash
// and prevent the browser from restoring the previous scroll position.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
if (window.location.hash) {
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search,
  );
}
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
