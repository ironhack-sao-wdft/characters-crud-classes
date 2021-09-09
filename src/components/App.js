import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import CharacterCreate from "./characters/CharacterCreate";
import CharacterList from "./characters/CharacterList";
import CharacterDetail from "./characters/CharacterDetail";
import CharacterUpdate from "./characters/CharacterUpdate";
import CharacterDelete from "./characters/CharacterDelete";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Route exact path="/" component={CharacterList} />
        <Switch>
          <Route
            exact
            path="/character/update/:id"
            component={CharacterUpdate}
          />
          <Route
            exact
            path="/character/delete/:id"
            component={CharacterDelete}
          />
          <Route exact path="/character/create" component={CharacterCreate} />
          <Route path="/character/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
