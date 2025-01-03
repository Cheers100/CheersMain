import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage.tsx"
import Login from '../pages/Login.tsx';
import Cadastro from '../pages/Cadastro.tsx';
import CadastroCliente from '../pages/CadastroCliente.tsx'
import CadastroNegocio from '../pages/CadastroNegocio.tsx'
import Home from '../pages/Home.tsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cadastro/cliente' element={<CadastroCliente />}></Route>
        <Route path='/cadastro/negocio' element={<CadastroNegocio />}></Route>
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
