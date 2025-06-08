import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Prototype } from "./screens/Prototype/Prototype";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Prototype />
  </StrictMode>,
);
