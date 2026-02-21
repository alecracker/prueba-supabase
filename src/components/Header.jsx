import { useAuth } from "../contexts/AuthContext";
function Header() {
  const { userData } = useAuth();
  return (
    <header>
      <h1>Bienvenido {userData.username}</h1>
    </header>
  );
}

export default Header;
