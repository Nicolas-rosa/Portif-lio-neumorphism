import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Curriculo from "./pages/Curriculo";
import Portifolio from "./pages/Portifolio";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import './index.css';
import Header from './Components/Header.jsx'
import Techs from './Components/Techs.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Techs/>
      <Routes>
        <Route element={<Curriculo />} path="/curriculo" />
        <Route element={<Portifolio />} path="/portifolio" />
        <Route element={<Home />} path="/" />
        <Route element={<Contato />} path="/contato" />
      </Routes>
    </BrowserRouter>
  );
}
