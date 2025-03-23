import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import C from './routes/ConfigRoutes.jsx'
import App from './App.jsx'
import NavBar from './components/organisms/NavBar.jsx'
import Footer from './components/organisms/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <C/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
