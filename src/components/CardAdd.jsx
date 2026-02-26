import { CircleAddIcon } from "../assets/Icons/Icons";
import { useState } from "react";
import { CreateMenu } from "./CreateMenu";
import "./styles/CarAdd.css";
export const CardAdd = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [step, setStep] = useState(0);
  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
    setStep(0);
    console.log(toggleModal);
  };
  return (
    <main className="card-add">
      <span>Agregar</span>
      <CircleAddIcon onClick={handleToggleModal} />
      <CreateMenu
        toggleModal={toggleModal}
        handleToggleModal={handleToggleModal}
        step={step}
        setStep={setStep}
      />
    </main>
  );
};
