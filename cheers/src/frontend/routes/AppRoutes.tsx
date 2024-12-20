import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home.tsx"
import Login from '../pages/Login.tsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
