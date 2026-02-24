import { ModulesCard } from "../components/ModulesCard";
import ModuleDescription from "../components/ModuleDescription";
import {
  OrderIcon,
  InventoryIcon,
  ShoppingIcon,
  CartArrowIcon,
} from "../assets/Icons/Icons";
import "../index.css";

export const OperationPage = () => {
  
  const CardData = [
    {
      icon: <InventoryIcon />,
      name: "Inventario",
      description: "Gestion de Inventario",
      path: "/operaciones/inventario",
    },
    {
      icon: <OrderIcon />,
      name: "Pedidos",
      description: "Gestion de Pedidos",
      path: "/operaciones/pedidos",
    },
    {
      icon: <CartArrowIcon />,
      name: "Compras",
      description: "Gestion de Compras",
      path: "/operaciones/compras",
    },
    {
      icon: <ShoppingIcon />,
      name: "Ventas",
      description: "Gestion de Ventas",
      path: "/",
    },
  ];
  return (
    <>
      <ModuleDescription
        title="Operaciones"
        description="Gestión y control integral de las operaciones"
      />
      <section className="modules-container">
        {CardData.map((card) => (
          <ModulesCard
            key={card.name}
            icon={card.icon}
            name={card.name}
            description={card.description}
            path={card.path}
          />
        ))}
      </section>
    </>
  );
};
