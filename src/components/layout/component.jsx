import { useUserContext } from "../../contexts/user";

export const Layout = ({ children }) => {
  const value = useUserContext();
  console.log(value);
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
