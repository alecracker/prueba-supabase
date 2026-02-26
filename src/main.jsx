import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { InventoryProvider } from "./contexts/InventoryProvider.jsx";
import { MenuProvider } from "./contexts/MenuProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <InventoryProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </InventoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
