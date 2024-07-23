import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
