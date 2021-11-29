import { Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </Layout>
  );
}

export default App;
