import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import Register from './component/Register/Register';
import FooterRegister from "./component/Register/FooterRegister";
import Hall from "./component/Feed/Hall";
import Home from './component/home';
import UploadImg from './component/uploadImg';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/hall" element={ <Hall /> }/>
        <Route path="/register" element={<Register />}/>
        <Route path="/uploadImg" element={<UploadImg />}/>
    </Routes>
</BrowserRouter>
  )}

export default App;
