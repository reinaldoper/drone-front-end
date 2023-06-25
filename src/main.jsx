import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import App from './pages/App.jsx'
import Drones from './components/Drones/Drones'
import Videos from './components/Videos/Videos'
import Entregas from './components/Entregas/Entregas'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteEntregas from './components/Entregas/DeleteEntregas'
import GetEntregasDrone from './components/Entregas/GetEntregasDrone'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
  <React.StrictMode>
    <BrowserRouter> 
      <Routes> 
          <Route path="/" element={<App />} /> 
          <Route path='/drones' element={<Drones />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/entregas' element={<Entregas />} />
          <Route path='/entregas/delete' element={<DeleteEntregas />} />
          <Route path='/entregas/drone' element={<GetEntregasDrone />} />
      </Routes> 
    </BrowserRouter> 
  </React.StrictMode>
  </Provider>
)
