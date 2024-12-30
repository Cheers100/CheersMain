import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home.tsx"
import Login from '../pages/Login.tsx';
import Cadastro from '../pages/Cadastro.tsx';
import CadastroCliente from '../pages/CadastroCliente.tsx'
import CadastroNegocio from '../pages/CadastroNegocio.tsx'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cadastro/cliente' element={<CadastroCliente />}></Route>
        <Route path='/cadastro/negocio' element={<CadastroNegocio />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
