import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Buttons from './Components/Button';
import Cards from './Components/Cards';
import Tables from './Components/Table';
import Charts from './Components/Charts';
import Colors from './Components/Colors';
import Borders from './Components/Borders';
import Animations from './Components/Animations';
import Others from './Components/Others';
import Register from './Components/Register';
import ForgotPassword from './Components/Forgot-password';
import Page from './Components/404-Page';
import BlankPage from './Components/Blank-page';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Buttons />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/color" element={<Colors />} />
          <Route path="/border" element={<Borders />} />
          <Route path="/animation" element={<Animations />} />
          <Route path="/other" element={<Others />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/404page" element={<Page />} />
          <Route path="/blankpage" element={<BlankPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
