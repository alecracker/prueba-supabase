import "./styles/usuarios.css";
import { CardEmpleado } from "../components/Card(Empleado)";

export const UsuariosPage = ()=>{
  return(
    <>
      <h1>Usuarios</h1>
      <div className="Usuarios__container">
        <CardEmpleado/>
        <CardEmpleado/>
      </div>
    </>
  )
}

