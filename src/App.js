
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/homepage' element={<Homepage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
