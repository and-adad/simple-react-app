import { Cimemas } from "./components/cinemas/component";
import { cinemas } from "./constants/mock";
import { Layout } from "./components/layout/component";
import { UserContextProvider } from "./contexts/user";

export function App () {
  return (
    
    <UserContextProvider>
      <Layout>
        <Cimemas cinemas={cinemas} />
      </Layout>
    </UserContextProvider>
  
);
}