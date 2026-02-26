import { useOrders } from "../src/contexts/OrderContext";
import { OrderCard } from "../src/components/OrderCard";
import { ChefHat } from "../src/assets/Icons/Icons";
import "./styles/Orders.css";

export function Orders() {
  const { ordersData } = useOrders();

  return (
    <main className="orders-page">
      <section className="orders-container">
        {ordersData.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
        {ordersData.length === 0 && (
          <div className="no-orders">
            <p>No hay pedidos registrados.</p>
          </div>
        )}
      </section>
    </main>
  );
}
