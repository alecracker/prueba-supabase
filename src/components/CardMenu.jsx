import { useState } from "react";
import "./styles/CardMenu.css";
import { EditIcon, TrashIcon } from "../assets/Icons/Icons";
import { useMenu } from "../contexts/MenuContext";
import { EditMenu } from "./EditMenu";

export function CardMenu({ menu }) {
  const { handleDeleteMenu } = useMenu();
  const [toggleEditModal, setToggleEditModal] = useState(false);

  const handleToggleEditModal = () => {
    setToggleEditModal(!toggleEditModal);
  };

  const onDelete = () => {
    if (
      window.confirm(`¿Estás seguro de que quieres eliminar "${menu.name}"?`)
    ) {
      handleDeleteMenu(menu.id);
    }
  };

  return (
    <>
      <main className="card-menu">
        <section className="img-container-menu">
          <img src={menu.image} alt={menu.name} />
        </section>
        <div className="card-content">
          <section className="title-product-menu">
            <h2>{menu.name}</h2>
            <span className="price-tag">${menu.price}</span>
          </section>
          <section className="description-product-menu">
            <p>{menu.description}</p>
          </section>
          <section className="actions-menu">
            <button className="btn-edit" onClick={handleToggleEditModal}>
              <EditIcon />
            </button>
            <button className="btn-delete" onClick={onDelete}>
              <TrashIcon />
            </button>
          </section>
        </div>
      </main>
      <EditMenu
        toggleModal={toggleEditModal}
        handleToggleModal={handleToggleEditModal}
        menu={menu}
      />
    </>
  );
}
