import "./StatsCard.css";
const StatsCard = ({ title, value, icon }) => {
  return (
    <section className="common-stat-card">
      <h4>{title}</h4>
      <div className="stat-content">
        <div className="stat-icon">{icon}</div>
        <span className="stat-number">{value}</span>
      </div>
    </section>
  );
};

export default StatsCard;
