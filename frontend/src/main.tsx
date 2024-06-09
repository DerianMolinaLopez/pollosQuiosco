import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InicioView from './view/InicioView'
import LayoutMain from './Layouts/LayoutMain'
import ComplementosView from './view/Complementos'
import PlatillosView from './view/PlatillosView'
import BebidasView from './view/BebidasView'
import { QueryClient, QueryClientProvider } from 'react-query'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index path="/" element={<InicioView />} />
            <Route path="/Complementos" element={<ComplementosView />} />
            <Route path="/Bebidas" element={<BebidasView />} />
            <Route path="/Platillos" element={<PlatillosView />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  </React.StrictMode>,
)
