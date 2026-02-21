import { Outlet, Navigate, NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  BriefCase,
  ClipboardList,
  Utensils,
  ExitArrow,
} from "../assets/Icons/Icons";

export const Sidebar = () => {
  const links = [
    { to: "/", name: "Resumen", icon: <BriefCase /> },
    { to: "/usuarios", name: "Administracion", icon: <BriefCase /> },
    { to: "/clientes", name: "Operaciones", icon: <Utensils /> },
    // { "/personas", "Operaciones" },
  ];

  return (
    <aside>
      <header>
        <div className="logo-image"></div>
        <div className="header-text">
          <h1>QuickFire Kitchen</h1>
          <h4>Sistema de Gestión</h4>
        </div>
      </header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>
                {link.icon} <label>{link.name}</label>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="footer-sidebar">
        <button>
          <ExitArrow /> Cerrar Sesión
        </button>
      </footer>
    </aside>
  );
};
