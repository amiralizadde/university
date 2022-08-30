import React from "react";
import './App.css'
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useRoutes}from 'react-router-dom';
import routes from "./routes";

function App() {

  let route = useRoutes(routes)
  return (
    <div id="top">
      <NavBar/>
    {route}
      <Footer/>
      <div id="scrollTop" className="">
        <a href="#top" style={{color:"white"}}><ArrowUpwardIcon /></a>
      </div>
    </div>
  );
}

export default App;
