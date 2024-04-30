import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./components/Error"
import HostLayout from "./components/HostLayout"
import Layout from "./components/Layout"
import './index.css'
import About from "./pages/About"
import Home from "./pages/Home"
import Dashboard from "./pages/Host/Dashboard"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhoto from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import NotFound from "./pages/NotFound"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import './server'
import Login, { loader as loginLoader } from "./pages/Login"
import { requireAuth } from "./utils"

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'vans', element: <Vans />, loader: vansLoader, errorElement: <Error /> },
        { path: 'login', element: <Login />, loader: loginLoader },
        { path: 'vans/:id', element: <VanDetail />, loader: vanDetailLoader },
        {
          path: 'host', element: <HostLayout />, children: [
            { index: true, element: <Dashboard />, loader: async () => await requireAuth(), errorElement: <Error /> },
            { path: 'income', element: <Income />, loader: async () => await requireAuth(), errorElement: <Error /> },
            { path: 'reviews', element: <Reviews />, loader: async () => await requireAuth(), errorElement: <Error /> },
            { path: 'vans', element: <HostVans />, loader: hostVansLoader },
            {
              path: 'vans/:id', 
              element: <HostVanDetail />, 
              loader: hostVanDetailLoader, 
              children: [
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