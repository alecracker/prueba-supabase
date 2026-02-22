import { useNavigate } from "react-router-dom";
import { sileo } from "sileo";
import "./ModulesCard.css";
export function ModulesCard({ icon, name, description, path }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
    sileo.success({
      title: "Booking confirmed",
      fill: "black",
      styles: {
        title: "text-white!",
        description: "text-white/75!",
      },
    });
  };

  return (
    <main className="modules-main-card" onClick={handleCardClick}>
      <div className="modules-main-card-icon">{icon}</div>
      <div className="modules-main-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </main>
  );
}
