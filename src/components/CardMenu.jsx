import "./styles/CardMenu.css";
export function CardMenu({ menu }) {
  return (
    <main className="card-menu">
      <section className="img-container-menu">
        <img src={menu.image} />
      </section>
      <section className="title-product-menu">
        <h2>{menu.name}</h2>
        <h2>
          <span>${menu.price}</span>
        </h2>
      </section>
      <section className="description-product-menu">
        <p>{menu.description}</p>
      </section>
    </main>
  );
}
