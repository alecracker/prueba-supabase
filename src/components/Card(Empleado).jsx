import "./styles/cardempleados.css"
import bendas from "./img/bendas.png"
export const CardEmpleado = () => {
    return (
        <div className="Card">
            {/*LOGO DE LA EMPRESA*/}
            <img src={bendas} alt="Perfil" className="Img__perfil" />
            {/*NOMBRE DEL EMPLEADO*/}
            <h3 className="Card__nombre">Luis Aizawa</h3>
            {/*ROL DEL EMPLEADO*/}
            <p className="Card__role">Chef</p>
            {/*INFORMACION DEL EMPLEADO*/}
            <div className="Card__info">
                <div className="Info__details">
                    <p>Turno:</p>
                    <p className="Card__turno">Noche</p>
                </div>
                <div className="Info__details">
                    <p>Tipo:</p>
                    <p className="Card__tipo">Tiempo completo</p>
                </div>
            </div>
            {/*BOTON DE EDITAR*/}
            <button className="Card__btn">Editar</button>
            
        </div>
    );
}