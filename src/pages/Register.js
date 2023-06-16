import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {IP} from "../const/global"

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

        let result = await fetch(IP + "/api/Users/RegisterUser",{
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
            <h1>Регистрация</h1>
            <input type="text" className="form-control" value={firsName} onChange={(e)=> setFirsName(e.target.value)} placeholder="Имя" />
            <br />
            <input type="text" className="form-control" value={midleName} onChange={(e)=> setMidleName(e.target.value)} placeholder="Фамилия" />
            <br />
            <input type="text" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder="Отчество" />
            <br />
            <input type="text" className="form-control" value={login} onChange={(e)=> setLogin(e.target.value)} placeholder="Логин" />
            <br />
            <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Пароль"/>
            <br />
            <input type="text" className="form-control" value={adress} onChange={(e)=> setAdress(e.target.value)} placeholder="Адрес" />
            <br />
            <input type="text" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Телефон" />
            <br />
            <input type="text" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
            <br />

            <button className="btn btn-primary" onClick={signUp}>Зарегистрироваться</button>
        </div>
    );
}

export default Register;