import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitch = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Agregado para la base de datos
    handleLogin(formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Iniciar Sesión
          </button>
        </form>
        <p className="auth-switch">
          ¿No tienes cuenta?{" "}
          <span onClick={handleSwitch} className="auth-link">
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};
