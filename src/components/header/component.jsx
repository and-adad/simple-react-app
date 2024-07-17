import { useUserContext } from "../../contexts/user";

export const Header = () => {
  const { user, login, logout } = useUserContext();

  return (
    <header>
      Header
      {user && <span>{user.name}</span>}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login({ name: "Андрей" })}></button>
      )}
    </header>
  );
};
