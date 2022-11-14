import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
//import Header from './Header'

function Login() {
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");


    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/')
        }
    }, [])
    async function Login(){
        let item={login,password};
        let result = await fetch("http://192.168.0.101:3310/api/Users/SignIn",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/')
    }
    return (
        <div>
            {/*<Header/>*/}
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="login"
                       onChange={(e)=> setLogin(e.target.value)} className="form-control"/>
                <br/>
                <input type="password" placeholder="password"
                       onChange={(e)=> setPassword(e.target.value)} className="form-control"/>
                <br/>
                <button className="btn btn-primary" onClick={Login}>Login</button>
            </div>
        </div>
    )
}
export default Login