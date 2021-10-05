import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherCard from "./containers/Homepage";

function App() {
  return (
    <div className="backgound-design">
      <Router>
        <Switch>
          <Route>
            <WeatherCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
