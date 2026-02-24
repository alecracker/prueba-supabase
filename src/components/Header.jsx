import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ tabs }) {
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    navigate(tab.path);
  };

  return (
    <header className="inventory-header-container">
      {tabs.map((tab) => (
        <button key={tab.path} onClick={() => handleTabChange(tab)}>
          {tab.label}
        </button>
      ))}
    </header>
  );
}
export default Header;
