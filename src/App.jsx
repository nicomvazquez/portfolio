import React from 'react'

import Navbar from './components/Navbar.jsx'

import Home from './pages/Home.jsx'
import Info from "./pages/Info.jsx";
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Futher from './pages/Futher.jsx'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Info></Info>
      <Services></Services>
      <Portfolio></Portfolio>
      <Futher></Futher>
    </div>
  )
}

export default App