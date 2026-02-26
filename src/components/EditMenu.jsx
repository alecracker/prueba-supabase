import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { AddMenu } from "./AddMenu";
import { AddIngredients } from "./AddIngredients";
import { useMenu } from "../contexts/MenuContext";

export const EditMenu = ({ toggleModal, handleToggleModal, menu }) => {
  const { handleUpdateMenu } = useMenu();
  const [step, setStep] = useState(0);
  const [menuData, setMenuData] = useState({
    id: menu.id,
    name: menu.name,
    price: menu.price,
    description: menu.description,
    image: menu.image,
    category: menu.category_id,
  });

  useEffect(() => {
    setMenuData({
      id: menu.id,
      name: menu.name,
      price: menu.price,
      description: menu.description,
      image: menu.image,
      category: menu.category_id,
    });
  }, [menu]);

  const handleNextStep = () => {
    setStep(1);
  };

  const handlePreviousStep = () => {
    setStep(0);
  };

  if (!toggleModal) return null;

  return (
    <>
      <Modal
        title={step ? "Editar ingredientes" : "Editar platillo"}
        isOpen={toggleModal}
        onClose={handleToggleModal}
      >
        {step ? (
          <AddIngredients
            handleNextStep={handleNextStep}
            handleToggleModal={handleToggleModal}
            handlePreviousStep={handlePreviousStep}
            menuData={menuData}
            setMenuData={setMenuData}
          />
        ) : (
          <AddMenu
            handleNextStep={handleNextStep}
            handleToggleModal={handleToggleModal}
            menuData={menuData}
            setMenuData={setMenuData}
          />
        )}
      </Modal>
    </>
  );
};
