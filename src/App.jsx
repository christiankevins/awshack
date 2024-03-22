import React from "react";
import Routes from "./Routes";
import SignupPage from "pages/Signup";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
