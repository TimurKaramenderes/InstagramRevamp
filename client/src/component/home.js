import { useNavigate } from 'react-router-dom';
import Logo from "./Logo/Logo.js"

const Home = () => {

    const navigate = useNavigate();
    const register = () => {
        navigate("/register");
    }
    const login = () => {
        navigate("/login");
    }

  return (
    <>  
        <Logo />
        <form>
        <button className="buttonLog" onClick={register}>Créer un compte</button>
        <button className="buttonLog" onClick={login}>Se connecter</button>
        </form>
    </>
  );
}

export default Home;