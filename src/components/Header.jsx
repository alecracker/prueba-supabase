import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ tabs, activeTab, onTabChange }) {
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    onTabChange(tab);
    navigate(tab.value);
  };

  return (
    <header className="inventory-header-container">
      {tabs.map((tab) => (
        <button key={tab.value} onClick={() => handleTabChange(tab)}>
          <div>{tab.icon}</div>
          {tab.label}
        </button>
      ))}
    </header>
  );
}

export default Header;
