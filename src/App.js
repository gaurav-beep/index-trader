import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "./component/Navbar";
import PageRoutes from "./shared/PageRoutes";
export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
     <PageRoutes/>
    </Router> 
    </>
  );
}

 