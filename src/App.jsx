import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./components/Error"
import HostLayout from "./components/HostLayout"
import Layout from "./components/Layout"
import './index.css'
import About from "./pages/About"
import Home from "./pages/Home"
import Dashboard from "./pages/Host/Dashboard"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhoto from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVans from "./pages/Host/HostVans"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import NotFound from "./pages/NotFound"
import VanDetail from "./pages/Vans/VanDetail"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import './server'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'vans', element: <Vans />, loader: vansLoader, errorElement: <Error /> },
        { path: 'vans/:id', element: <VanDetail /> },
        {
          path: 'host', element: <HostLayout />, children: [
            { index: true, element: <Dashboard /> },
            { path: 'income', element: <Income /> },
            { path: 'reviews', element: <Reviews /> },
            { path: 'vans', element: <HostVans /> },
            {
              path: 'vans/:id', element: <HostVanDetail />, children: [
                { index: true, element: <HostVanInfo /> },
                { path: 'pricing', element: <HostVanPricing /> },
                { path: 'photos', element: <HostVanPhoto /> }
              ]
            }
          ]
        },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App