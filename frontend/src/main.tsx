import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InicioView from './view/InicioView'
import LayoutMain from './Layouts/LayoutMain'
import ResumenCompra from './view/ResumenCompra'
import { QueryClient, QueryClientProvider } from 'react-query'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <QueryClientProvider client={new QueryClient()}>
      <GlobalProvider>
         <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index path="/" element={<InicioView />} />
            
          </Route>
          <Route path='/resumen' element= {<ResumenCompra></ResumenCompra>}></Route>

        </Routes>
      </BrowserRouter>
      </GlobalProvider>
     
    </QueryClientProvider>

  </React.StrictMode>,
)
