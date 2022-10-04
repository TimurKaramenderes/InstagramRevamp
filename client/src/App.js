import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hall from './component/hall';
import Login from './component/home';
import Register from './component/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route
            path="/"
            element={ <Login /> }
        />
           <Route
            path="/hall"
            element={ <Hall /> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
