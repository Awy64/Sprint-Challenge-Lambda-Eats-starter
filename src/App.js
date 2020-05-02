import React from "react";
import "./App.css";
import {Route, Switch, Link} from 'react-router-dom';
import Form from "./components/Form"

const App = () => {
  return (

    <div className="wrapper">
      <div className="formClass">
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/">
          <Link to="/pizza"><button>Start Order</button></Link>
        </Route>
      </Switch>
    </div>
  </div>
  );
  
};
export default App;
