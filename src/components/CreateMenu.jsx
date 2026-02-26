import { useState } from "react";
import { Modal } from "./Modal";
import { AddMenu } from "./AddMenu";
import { AddIngredients } from "./AddIngredients";
export const CreateMenu = ({
  toggleModal,
  handleToggleModal,
  step,
  setStep,
}) => {
  const [menuData, setMenuData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

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
        title={step ? "Agregar ingredientes" : "Agregar platillo"}
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
