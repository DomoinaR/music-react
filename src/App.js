import React from "react";

/* -- import components -- */
import Artist from "./components/Artist";
import Main from "./components/Main";

/* -- import css -- */
import "./App.css";

/* -- import data -- */

/* -- import images -- */
import logo from "./logo.svg";

/* -- import packages -- */
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
     
     <BrowserRouter>        
        <Link to="/">Artist</Link>
        <Link to="/main">Main</Link>
        
        <Route exact path="/" component={Artist}></Route>
        <Route exact path="/main" component={Main}></Route>
      </BrowserRouter>  
    
      {/*--<Artist /> */}
    </div>
  );
}

export default App;
