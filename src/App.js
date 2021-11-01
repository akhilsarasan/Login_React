import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/create' exact component={CreateUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
