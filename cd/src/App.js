import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Home from "./component/home/home";

function App() {

  return (
    <div>
      <Router basename="website-host">
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;