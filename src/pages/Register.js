import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom'

function Register() {
    const [firsName,setFirsName]= useState("")
    const [midleName,setMidleName]= useState("")
    const [lastName,setLastName]= useState("")
    const [password,setPassword]= useState("")
    const [adress,setAdress]= useState("")
    const [phone,setPhone]= useState("")
    const [email,setEmail]= useState("")
    const [login,setLogin]= useState("")


    const navigate=useNavigate ();


    async function signUp(){
        let item={firsName,midleName,lastName,adress,phone,email,password,login}
        //console.warn(item)

        let result = await fetch("http://192.168.0.101:3310/api/Users/RegisterUser",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/');

        //console.warn("result",result)



    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" className="form-control" value={firsName} onChange={(e)=> setFirsName(e.target.value)} placeholder="firsName" />
            <br />
            <input type="text" className="form-control" value={midleName} onChange={(e)=> setMidleName(e.target.value)} placeholder="midleName" />
            <br />
            <input type="text" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder="lastName" />
            <br />
            <input type="text" className="form-control" value={login} onChange={(e)=> setLogin(e.target.value)} placeholder="login" />
            <br />
            <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
            <br />
            <input type="text" className="form-control" value={adress} onChange={(e)=> setAdress(e.target.value)} placeholder="adress" />
            <br />
            <input type="text" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="phone" />
            <br />
            <input type="text" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email" />
            <br />

            <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default Register;