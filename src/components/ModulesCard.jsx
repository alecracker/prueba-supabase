import "./ModulesCard.css";
export function ModulesCard() {
  return (
    <div className="modules-main-grid">
      <div
        className="modules-main-card"
        // onClick={() => handleCardClick(card.path)}
      >
        <div className="modules-main-card-icon">icono</div>
        <div className="modules-main-card-content">
          <h3>Hola</h3>
          <p>Mundo</p>
          <small>Proyecto:</small>
        </div>
      </div>
      <div
        className="modules-main-card"
        // onClick={() => handleCardClick(card.path)}
      >
        <div className="modules-main-card-icon">icono</div>
        <div className="modules-main-card-content">
          <h3>Hola</h3>
          <p>Mundo</p>
          <small>Proyecto:</small>
        </div>
      </div>
    </div>
  );
}
