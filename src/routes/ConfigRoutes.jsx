import { Route, Routes } from 'react-router';
import App from '../App.jsx';
import MenuPrincipal from '../views/MenuPrincipal.jsx';
import InformacionPokemon from '../components/organisms/InformacionPokemon.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
            <Route path="/InformacionPokemon/:nombre" element={<InformacionPokemon />} />
        </Routes>
    )
}

export default AppRoutes;