import { useState } from 'react'
import './App.css'

import MainWrapper from "./components/MainWrapper.jsx"
import TopNav from "./components/TopNav.jsx"


function App() {

  return (
    <>
      <TopNav></TopNav>
      <MainWrapper>
        <h1 className="text-white text-4xl lg:text-6xl font-bold">
          Здравейте, аз съм  Диян и програмирам
        </h1>
      </MainWrapper>
    </>
  )
}

export default App
