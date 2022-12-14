import { useState } from "react";
import Logo from "./Logo/Logo";
import axios from "axios";
import {useCookies} from "react-cookie";

let user_id = "";
const url = "http://localhost:8080/registerImg"; 

const UploadImg = () => {
    
    console.log(localStorage.getItem("token"));
  
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);

    const upload = async (e) => {
        e.preventDefault();
    
        const readFile = () => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(img);
            fileReader.onload = () => {
              resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
        }   
        const image = await readFile(img);
        console.log(image);
        setResult(image);

        const newImg = {
            'url' : image,
            'description' : description,
            
      }
        const headers = "Bearer "+cookies["token"];
        try {
            const response = await axios.post(url, newImg, {headers: {Authorization:headers}});
            console.log("image added");
        } catch (err) {
            console.log(err);
        }    
     
    }

    return (
        <>
        <Logo />
        <form>
        <div>
            <label for="image">Upload Image</label>
            <input type="file" id="image" name="image"  onChange={(e) => setImg(e.target.files[0])} required></input>
        </div>
        <div>
            <label for="desc">Image Description</label>
            <textarea id="desc" name="desc" value={description} onChange={(e) => setDescription(e.target.value)} rows="2" 
                      placeholder="Description" required>
            </textarea>
        </div>
       
        <div>
            <button className="buttonLog" type="submit" onClick={upload}>Submit</button>
        </div>
    </form>
        <img src={result}></img>
     </>       
    );
}


export default UploadImg;