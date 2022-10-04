import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import Register from './component/Register/Register';
import FooterRegister from "./component/Register/FooterRegister"
import Hall from "./component/Feed/Hall"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/hall" element={ <Hall /> }/>
        <Route path="/register" element={<Register />}/>
    </Routes>
</BrowserRouter>
  )}

export default App;
