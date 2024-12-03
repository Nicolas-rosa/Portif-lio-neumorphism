import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Curriculo from "./pages/Curriculo"
import Portifolio from "./pages/Portifolio"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import './index.css'

export default function App() {
  return (
<BrowserRouter>
<Routes>
<Route Component = { Curriculo } path="/Curriculo" />
<Route Component = { Portifolio } path="/portifolio" />
<Route Component={ Home } path="/" />
<Route Component={ Contato } path="/contato" />
</Routes>

</BrowserRouter>
  )
}