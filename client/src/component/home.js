import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const url = "http://localhost:8080/login";


const Login = () => { 
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       url, 
  //     );
  //       console.log(result);
  //     setUsers(result.data.users);
  //   };

  //   fetchData();
  // }, []);

  // return (

  //     <ul>
  //       {users.map(user => (
  //         <li key={user._id}>
  //           <p >{user.name}</p>
  //           <p >{user.email}</p>
  //         </li>
  //       ))}
  //        <button>Hello</button>
  //     </ul>
  //   );

//   const newUser = {
//     'name' : name,
//     'lastname' : "hyi",
//     'username' : "lo",
//     'email' : email,
//     'password' : "123",
//     'confirmPwd' : "123"
// }
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(""); 
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const formSubmitHandler = async (event) => {
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
      console.log(err);
      }
  }

  console.log(userToken);

  return (
    <>
    {success ? (
      <section>
          <h1>Success!</h1>
      </section>
  ) : (
    <div>
        <form>
        <input type="text" value={pwd}
          onChange={(e) => setPwd(e.target.value)}></input><br/>
        <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={formSubmitHandler}></button>
        </form>

   </div>
   )}
    </>
  );
}

export default Login;

