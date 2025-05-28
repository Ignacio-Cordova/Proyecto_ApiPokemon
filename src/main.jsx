import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './styles/index.css'
import C from './routes/ConfigRoutes.jsx'
import App from './App.jsx'
import NavBar from './components/organisms/NavBar.jsx'
import Footer from './components/organisms/Footer.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <NavBar/>
      <C/>
      <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
