import { useState } from "react";
import "./styles/cardempleados.css"
import { Modal } from "./Modal";
import bendas from "./img/bendas.png"
import supabase from "../api/supaBase.js";

export const CardEmpleado = ({ empleado, onUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(empleado);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleClose = () => {
        setIsModalOpen(false);
        setIsEditing(false);
        setFormData(empleado); 
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from("employes") 
            .update({
                name: formData.name,
                role: formData.role,
                turn: formData.turn,
                type: formData.type,
                salary: parseFloat(formData.salary),
                email: formData.email,
                hire_date: formData.hire_date
            })
            .eq("id", empleado.id);

        if (error) {
            console.error(error);
            alert("Error al actualizar: " + error.message);
        } else {
            alert("Empleado actualizado con éxito");
            setIsEditing(false);
            if (onUpdate) onUpdate(); // Refresh the list
        }
    };

    return (
        <>
            <div className="Card">
                {/*LOGO DE LA EMPRESA*/}
                <img src={bendas} alt="Perfil" className="Img__perfil" />
                {/*NOMBRE DEL EMPLEADO*/}
                <h3 className="Card__name">{empleado.name}</h3>
                {/*ROL DEL EMPLEADO*/}
                <p className="Card__role">{empleado.role}</p>
                {/*INFORMACION DEL EMPLEADO*/}
                <div className="Card__info">
                    <div className="Info__details">
                        <p>Turno:</p>
                        <p className="Card__turn">{empleado.turn}</p>
                    </div>
                    <div className="Info__details">
                        <p>Tipo:</p>
                        <p className="Card__type">{empleado.type}</p>
                    </div>
                </div>
                {/*BOTON DE EDITAR*/}
                <button className="Card__btn" onClick={() => setIsModalOpen(true)}>
                    Más Información
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleClose}
                title={isEditing ? "Editar Empleado" : "Detalles del Empleado"}
            >
                {isEditing ? (
                    <form className="Modal__form" onSubmit={handleUpdate}>
                        <div className="Inputs">
                            <label>Nombre:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="Inputs">
                            <label>Rol:</label>
                            <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                        </div>
                        
                        <div className="Input__row">
                            <div className="Inputs">
                                <label>Turno:</label>
                                <select name="turn" value={formData.turn} onChange={handleChange}>
                                    <option value="Mañana">Mañana</option>
                                    <option value="Tarde">Tarde</option>
                                    <option value="Noche">Noche</option>
                                    <option value="Día completo">Día completo</option>
                                </select>
                            </div>
                            <div className="Inputs">
                                <label>Tipo:</label>
                                <select name="type" value={formData.type} onChange={handleChange}>
                                    <option value="Tiempo completo">Tiempo completo</option>
                                    <option value="Medio tiempo">Medio tiempo</option>
                                    <option value="Por contrato">Por contrato</option>
                                </select>
                            </div>
                        </div>

                        <div className="Inputs">
                            <label>Salario:</label>
                            <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
                        </div>
                        <div className="Inputs">
                            <label>Correo Electrónico:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="Inputs">
                            <label>Fecha de Contratación:</label>
                            <input type="date" name="hire_date" value={formData.hire_date} onChange={handleChange} required />
                        </div>

                        <div className="Modal__actions" >
                            <button className="Card__btn Btn__save" type="submit">Actualizar</button>
                            <button className="Card__btn Btn__save" type="button" onClick={() => setIsEditing(false)} >Cancelar</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <img src={bendas} alt="Perfil" className="Modal__img" />
                        <h3 className="Modal__name">{empleado.name}</h3>
                        <p className="Modal__role">{empleado.role}</p>
                        <div className="Modal__details">
                            <div className="Detail__item">
                                <p>Turno:</p>
                                <p className="Modal__turn">{empleado.turn}</p>
                            </div>
                            <div className="Detail__item">
                                <p>Tipo:</p>
                                <p className="Modal__type">{empleado.type}</p>
                            </div>
                            <div className="Detail__item">
                                <p>Salario:</p>
                                <p className="Modal__salary">{empleado.salary}</p>
                            </div>
                            <div className="Detail__item">
                                <p>Correo Electrónico:</p>
                                <p className="Modal__email">{empleado.email}</p>
                            </div>
                            <div className="Detail__item">
                                <p>Fecha de Contratación:</p>
                                <p className="Modal__date">{empleado.hire_date}</p>
                            </div>
                            <button className="Card__btn Btn__edit" onClick={() => setIsEditing(true)}>Editar</button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};
