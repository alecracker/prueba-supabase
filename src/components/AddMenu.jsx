import { useMenu } from "../contexts/MenuContext";
import "./styles/AddMenu.css";
export const AddMenu = ({
  handleNextStep,
  handleToggleModal,
  menuData,
  setMenuData,
}) => {
  const { categories } = useMenu();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="form-add-menu">
        <section className="form-add-menu-section">
          <label>
            NOMBRE DEL PLATILLO
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={menuData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            PRECIO
            <input
              type="number"
              name="price"
              placeholder="Precio"
              value={menuData.price}
              onChange={handleChange}
              required
            />
          </label>
        </section>
        <label>
          DESCRIPCIÓN
          <textarea
            type="text"
            name="description"
            placeholder="Descripción"
            value={menuData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          LINK IMAGEN
          <input
            type="text"
            name="image"
            placeholder="Link Imagen"
            value={menuData.image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CATEGORÍA
          <select
            name="category"
            value={menuData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <footer className="modal-footer">
        <button onClick={handleToggleModal}>Cancelar</button>
        <button onClick={handleNextStep}>Siguiente paso</button>
      </footer>
    </>
  );
};
