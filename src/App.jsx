import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { windowActions } from "./store/slices/window.js"; /* this imports all of the functions used to change the states in the slice store */
import { createBrowserRouter, Link, RouterProvider } from "react-router";

import "./App.css";

import MainWrapper from "./components/MainWrapper.jsx";
import TopNav from "./components/TopNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import LeftPageNav from "./components/LeftPageNav.jsx";
import ModalWindow from "./components/ModalWindow.jsx";
import SkillsPage from "./pages/Skills.jsx";
import { Outlet } from "react-router";


function App() {

  const windowOpen = useSelector((state) => state.window.isOpen);
  console.log("modal is open", windowOpen);


  const router = createBrowserRouter([
    { path: "/", 
      element: 
        <>
          <MainWrapper>
            <TopNav></TopNav>
            <LeftPageNav></LeftPageNav>
            {windowOpen && <ModalWindow heading="NUchan"></ModalWindow>}
            <Outlet></Outlet>   {/* this is where the children are rendered */}
          </MainWrapper>
        </>,
      children: [
        { path: "/",element: <HomePage/> },
        { path: "/skills",element: <SkillsPage/> },
      ],
    },
    
    { path: "/aboutMe", 
      element: <SkillsPage></SkillsPage> },
  ]);


  return <RouterProvider router={router} />;
}

export default App;
