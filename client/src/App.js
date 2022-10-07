import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import Register from './component/Register/Register';
import FooterRegister from "./component/Register/FooterRegister";
import Hall from "./component/Feed/Hall";
import Home from './component/home';
import UploadImg from './component/uploadImg';
import Profile from './component/profile';
import { useCookies, } from "react-cookie";



function App() {
  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/hall" element={ cookies["token"] ? <Hall /> : <Home /> }/>
        <Route path="/register" element={ cookies["token"] ? <Register /> : <Home />}/>
        <Route path="/uploadImg" element={  cookies["token"] ? <UploadImg /> : <Home />}/>
        <Route path="/profile" element={  cookies["token"] ? <Profile /> : <Home />}/>
    </Routes>
</BrowserRouter>
  )}

export default App;
