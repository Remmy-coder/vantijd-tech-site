import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </HelmetProvider>
    </StrictMode>,
  );
}
