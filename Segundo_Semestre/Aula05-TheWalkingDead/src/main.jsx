import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./routes/Home/Home.jsx"
import Serie from "./routes/Serie/Serie.jsx"
import Historia from "./routes/Historia/Historia.jsx"
import Episodios from "./routes/Episodios/Episodios.jsx"
import Contatos from "./routes/Contatos/Contatos.jsx"
import Error from "./routes/Error/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/historia",
        element: <Historia/>
      },
      {
        path: "/episodios",
        element: <Episodios/>
      },
      {
        path: "/serie",
        element: <Serie/>
      },
      {
        path: "/contatos",
        element: <Contatos/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
