import React, { useState , useRef, useEffect} from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import Logo from "./Logo/Logo.js"
=======
import { useNavigate, Link } from 'react-router-dom';
>>>>>>> 4d0f72080168fa67159eff6ce0170b4683668c1d


const url = "http://localhost:8080/login";


const Login = () => { 

  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(""); 
  const [errMsg, setErrMsg] = useState('');
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      'email' : email,
      'password' : pwd
    }
    try{
      const result = await axios.post(url, user);
      console.log(result);
      setUserToken(result.data.token);
      setSuccess(true);
      navigate("/hall");
    } catch (err) {
      setErrMsg("Invalid Password or e-mail");
      }
  }

  console.log(userToken);

  return (
    <>
    <Logo />  
    {success ? (
      <section>
          <h1>Success!</h1>
      </section>
  ) : (
    <section>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <form onSubmit={handleSubmit}>

        <input
            placeholder="E-mail d'utilisateur"
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            />
       
            <input
            placeholder="Mot de passe"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
        />
        <button className="buttonLog">Sign In</button>
    </form>
    <p className="text">
       Vous n'avez pas un compte ?  
        <span className="line">           
        <Link className="link" to="/register">Enregistrez-vous</Link>
        </span>
    </p>
</section>

   )}
    </>
  );
}

export default Login;

