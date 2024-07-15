import { Cimemas } from "./components/cinemas/component";
import { cinemas } from "./constants/mock";

export function App () {
  return (
  <>
    <header>Header</header>
    <Cimemas cinemas={cinemas} />
    <footer>Footer</footer>
  </>
);
}