import "./Auth.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import supabase from "../api/supaBase.js";
import bcrypt from "bcryptjs";



//Siempre poner el .js
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate()

  const handleSwitch = () =>{
    navigate("/login")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos de registro:', formData);
    
    //? Encriptación de la contraseña con bcrypt (bcryptjs)
    const passwordHashed = await bcrypt.hash(formData.password, 12)
    console.log(passwordHashed);
    
    //? Peticion para registrar con Supabase
    const {error} = await supabase.from("users").insert({
      username: formData.name,
      password_hash: passwordHashed,
      email : formData.email
    })

    if(error){
      alert("Error")
      return
    }

  };

  //si hay un await la funcion debe ser async
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Registrarse
          </button>
        </form>
        <p className="auth-switch">
          ¿Ya tienes cuenta?{' '}
          <span onClick={handleSwitch} className="auth-link">
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;