import { useContext, useState } from "react";
import "./App.css";

import MainWrapper from "./components/MainWrapper.jsx";
import TopNav from "./components/TopNav.jsx";
import HomePage from "./components/HomePage.jsx";
import LeftPageNav from "./components/LeftPageNav.jsx";


function App() {

  return (
    <MainWrapper>
      <TopNav></TopNav>
      <LeftPageNav></LeftPageNav>
      <HomePage></HomePage>
    </MainWrapper>
  );
}

export default App;
