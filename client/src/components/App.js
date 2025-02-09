import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Restaurant from "./Restaurant";
import NewRestaurant from "./NewRestaurant"; // Import the NewRestaurant component

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/restaurants/:id">
          <Restaurant />
        </Route>
        <Route exact path="/new-restaurant"> {/* Define route for adding new restaurant */}
          <NewRestaurant />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
