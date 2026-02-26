import "./Preview.css";
import supabase from "../api/supaBase.js";
import { XIcon, BoxOpen } from "../assets/Icons/Icons.jsx";

export const Preview = ({ itemsList = [], onDelete }) => {
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

  // Pequeño diccionario para traducir los números a texto real
  const categoriasMap = {
    5: "Carnes",
    8: "Vegetales",
    9: "Bebidas",
    10: "Insumos (Líquidos)",
    11: "Insumos (Secos)"
  };

  return (
    <main className="preview-item-container">
      {itemsList.map((item, index) => {
        // Soporta tanto category_id antiguo como unit_id nuevo
        const idCategoria = item.unit_id || item.category_id;
        const nombreCategoria = categoriasMap[idCategoria] || "No definida";

        return (
          <div key={item.id || index} className="preview-item-card">
            <header className="preview-item-header">
              {/* Usar nombre de base de datos */}
              <h1>{item.nombre}</h1>
              <button 
                className="preview-delete-btn"
                onClick={() => onDelete(item.id)}
              >
                <XIcon />
              </button>
            </header>
            <h5 className="product-details">
              Categoría: {nombreCategoria} {item.unit_product ? `- ${item.unit_product}` : ""}
            </h5>
            <h6 className="badge-qty">
              {/* Usar cantidad de base de datos */}
              <span>Cant:</span> {item.cantidad}
            </h6>
            <h6 className="price-tag">
              {/* Usar precio de base de datos */}
              <span>Precio (Und):</span> ${item.precio_unit}
            </h6>
            <h6 className="total-price-tag">
              {/* Usar precio de base de datos */}
              <span>Precio Total:</span> ${item.precio_unit * item.cantidad}
            </h6>
          </div>
        );
      })}
    </main>
  );
};
