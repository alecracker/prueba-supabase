import { CardEmpleado } from "./Card(Empleado)";
import "./styles/cardcontainer.css";

export const CardContainer = ({ empleados, onUpdate }) => {
  return (
    <div className="card-container">
      {empleados &&
        empleados.map((empleado) => (
          <CardEmpleado
            key={empleado.id}
            empleado={empleado}
            onUpdate={onUpdate}
          />
        ))}
    </div>
  );
};
