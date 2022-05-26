import React from "react"
import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'

function App() {
  return (
    <>
      <Navbar />
      <div class="container mt-4">
        <Routes>
          <Route exact path="/cadastro-produto" element={<CadastroProduto />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
