import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home.tsx"
import Login from '../pages/Login.tsx';
import Cadastro from '../pages/Cadastro.tsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
