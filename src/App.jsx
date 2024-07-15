import { Cimemas } from "./components/cinemas/component";
import { cinemas } from "./constants/mock";
import { Layout } from "./components/layout/component";

export function App () {
  return (
    
    <Layout>
      <Cimemas cinemas={cinemas} />
    </Layout>
  
);
}