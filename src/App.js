import React from "react"
import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import EditarProduto from './views/produtos/editar'
import ConsultaProdutos from './views/produtos/consulta'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastro-produto/" element={<CadastroProduto />} />
          <Route path="/editar-produto/:sku" element={<EditarProduto />} />
          <Route exact path="/consulta-produto" element={<ConsultaProdutos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
