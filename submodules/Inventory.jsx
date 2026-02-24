import { useState } from "react";
import { Outlet } from "react-router-dom";
import StatsCard from "../src/components/StatsCard.jsx";
import { InventoryIcon } from "../src/assets/Icons/Icons.jsx";
import Header from "../src/components/Header.jsx";
import { Preview } from "../src/components/Preview.jsx";
import "./Inventory.css";

export function Inventory() {
  const stats = [
    { title: "Total Productos", value: "100", icon: <InventoryIcon /> },
    { title: "Total Productos", value: "100", icon: <InventoryIcon /> },
    { title: "Total Productos", value: "100", icon: <InventoryIcon /> },
  ];

  const tabs = [
    { path: "/operaciones/inventario", label: "Inventario" },
    {
      path: "/operaciones/inventario/withdrawals",
      label: "Historial de Retiros",
    },
  ];
  const [activeTab, setActiveTab] = useState("/operaciones/inventario");

  const handleTabChange = (tab) => {
    setActiveTab(tab.path);
  };
  return (
    <main className="inventory-container">
      <section className="stats-container">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </section>

      <section className="add-inventory-container">
        <Header tabs={tabs} />
        <section className="inventory-outlet-wrapper">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
