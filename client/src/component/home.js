import React, { useState } from 'react';
import axios from 'axios';

const url = "http://localhost:8080/registerUser";

const Home = () => { 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const formSubmitHandler = async () =>{
       
         const newUser = {
            'name' : name,
            'lastname' : "hyi",
            'username' : "lo",
            'email' : email,
            'password' : "123",
            'confirmPwd' : "123"
        }

      await axios.post(url, newUser)
      .then(res => { console.log(res)})
      .catch(err => { console.log(err)});
    }

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

