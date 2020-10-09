import React from "react";
import Book from "./components/Book";
import UserLogin from "./components/Login";
import UserLogout from "./components/Logout";
import RegisterUser from "./components/Register";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <Link to="/"> Home page</Link>
          <Link to="/user/login"> Go to login page </Link>
          <Link to="/user/logout"> Go to logout page </Link>
          <Link to="/user/register"> Register user </Link>
        </div>

        <h2>MERN-Stack Book App</h2>

        <Route path="/" exact component={Book} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/user/logout" component={UserLogout} />
        <Route path="/user/register" component={RegisterUser} />
      </div>
    </Router>
  );
};
export default App;
