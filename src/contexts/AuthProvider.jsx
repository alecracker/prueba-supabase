import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import supabase from "../api/supaBase";
import bcrypt from "bcryptjs";

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    console.log("Datos de login:", formData);
    // Aquí iría la lógica para enviar los datos al servidor
    // TODO: Devuelve un objeto con una propiedad (En este caso porque solo se selecciona password_hash)

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", formData.email)
      .single();

    // TODO: Si no pones .single te devuelve un array
    if (!data) {
      alert("Este email no esta registrado.");
      return;
    }

    const isMatch = await bcrypt.compare(formData.password, data.password_hash);
    if (!isMatch) {
      alert("Contraseña incorrecta");
      return;
    }

    setUserData(data);
    setIsAuthenticated(true);
    navigate("/");
    alert(`Bienvenido ${data.username}`);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
