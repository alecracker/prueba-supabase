import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute.jsx";
import Register from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import { UsuariosPage } from "./pages/UsuariosPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
