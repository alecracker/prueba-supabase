import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import AppToaster from "./components/AppToaster.jsx";

import { Login } from "./components/Login.jsx";
import { AdministracionPage } from "./pages/AdministracionPage.jsx";
import {NominaPage} from "../submodules/NominaPage.jsx";
import { OperationPage } from "./pages/OperationPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { TableInventory } from "./components/TableInventory.jsx";
import { Withdrawals } from "./components/WithDrawalls.jsx";

import { Inventory } from "../submodules/Inventory.jsx";
import { Orders } from "../submodules/Orders.jsx";
import { Preview } from "./components/Preview.jsx";

import Register from "./components/Register.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <AppToaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/administracion">
            <Route index element={<AdministracionPage />} />
            <Route path="nomina" element={<NominaPage />} />
          </Route>

          <Route path="/operaciones">
            <Route index element={<OperationPage />} />
            <Route path="inventario" element={<Inventory />}> 
              <Route index element={<TableInventory />} />
              <Route path="withdrawals" element={<Withdrawals />} />
            </Route>
            <Route path="pedidos" element={<Orders />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
