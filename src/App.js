import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import useAuth from "./hooks/useAuth";
import { LinearProgress } from "@mui/material";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <PrivateRoute path="/appointment">
              {" "}
              <Appointment />{" "}
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
