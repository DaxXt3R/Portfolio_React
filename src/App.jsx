import { useState } from 'react'
import './App.css'

import MainWrapper from "./components/MainWrapper.jsx"
import TopNav from "./components/TopNav.jsx"
import HomePage from "./components/HomePage.jsx"

function App() {

  return (
    <>
      <MainWrapper>
        <TopNav></TopNav>
        <HomePage></HomePage>
      </MainWrapper>
    </>
  )
}

export default App
