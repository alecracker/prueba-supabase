import "./Preview.css";
import { XIcon, BoxOpen } from "../assets/Icons/Icons.jsx";
export const Preview = ({ itemsList = [] }) => {
  if (itemsList.length === 0) {
    return (
      <div className="preview-item">
        <div className="item-content">
          <BoxOpen />
        </div>
        <h1>No hay items agregados</h1>
        <p>Agrega items para verlos en esta seccion</p>
      </div>
    );
  }

  return (
    <main className="preview-item-container">
      {itemsList.map((item, index) => (
        <div key={index} className="preview-item-card">
          <header className="preview-item-header">
            <h1>{item.nombre_producto}</h1>
            <button className="preview-delete-btn">
              <XIcon />
            </button>
          </header>
          <h5 className="product-details">
            {item.categoria_producto} - {item.unidad}
          </h5>
          <h6 className="badge-qty">
            <span>Cant:</span> {item.cantidad_requerida}
          </h6>
          <h6 className="price-tag">
            <span>TOTAL:</span>${item.monto_dolares_aprox}
          </h6>
        </div>
      ))}
    </main>
  );
};
