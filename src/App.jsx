import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import './index.css'
import About from "./pages/About"
import Home from "./pages/Home"
import VanDetail from "./pages/VanDetail"
import Vans from "./pages/Vans"
import './server'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App