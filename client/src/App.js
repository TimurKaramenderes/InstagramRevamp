import './App.css';
import Home from './component/home';
import Register from './component/Register/Register';
import FooterRegister from "./component/Register/FooterRegister"

function App() {
  return (
    <div className="App">
      <Register /> 
      <FooterRegister />
    </div>
  );
}

export default App;
