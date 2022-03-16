import React from "react";
import { Route, Routes } from "react-router";
import Content from "./components/Content";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { RoutePath } from "./constants/routes";
import Home from "./pages/Home";
// import 'antd/dist/antd.css';
import "./scss/app.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__main">
        <SideBar />
        <Content />
      </div>
      <div className="layer layer--dis play">

      </div>
      <Filter/>

    </div>
  );
}

export default App;
