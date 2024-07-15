import { Cimemas } from "./components/cinemas/component";
import { cinemas } from "./constants/mock";

export function App () {
  return <Cimemas cinemas={cinemas} />;
}