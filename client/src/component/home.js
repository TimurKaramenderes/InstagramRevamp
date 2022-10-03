import React, { useState , useEffect} from 'react';
import axios from 'axios';

const url = "http://localhost:8080/registerUser";

const Home = () => { 
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
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function postUser() { 

    const newUser = {
          'name' : name,
          'lastname' : "hyi",
          'username' : "lo",
          'email' : email,
          'password' : "123",
          'confirmPwd' : "123"
    }

     axios.post(url, newUser)
    .then(res => { console.log(res)})
    .catch(err => { console.log(err)})
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    postUser();
  }

  //fetch();

  return (
    <div>
        <form>
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)}></input><br/>
        <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={formSubmitHandler}></button>
        </form>
    </div>
  );

}

export default Home;

