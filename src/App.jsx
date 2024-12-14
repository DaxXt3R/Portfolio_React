import { useState } from 'react'
import './App.css'

import MainWrapper from "./components/MainWrapper.jsx"
import TopNav from "./components/TopNav.jsx"
import HomePage from "./components/HomePage.jsx"
import LeftPageNav from "./components/LeftPageNav.jsx"

function App() {
  const [theme,setTheme]=useState(sessionStorage.getItem("theme")||"light") //light is default value in case theme doesnt exist in storage
  const [accent,setAccent]=useState(sessionStorage.getItem("accent")||"red")

  return (
    <>
      <MainWrapper>
        <TopNav></TopNav>
        <LeftPageNav></LeftPageNav>
        <HomePage></HomePage>
      </MainWrapper>
    </>
  )
}

export default App
