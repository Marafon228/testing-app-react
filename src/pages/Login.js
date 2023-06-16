import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {IP} from "../const/global"
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
        let result = await fetch(IP + "/api/Users/SignIn",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body: JSON.stringify(item)
        });


        result = await result.json();
        //let Enterprise = [];
        if (result['Role'] === 'Предприниматель') {

            let resultIdEnterprise = await fetch(IP + `/api/Users/GetEnterpriseFromUserId?id=${result['Id']}`,{
                method: 'GET',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":'application/json'
                },

            });
            resultIdEnterprise = await resultIdEnterprise.json();

            //console.log(resultIdEnterprise)




            result.Enterprise = resultIdEnterprise;
        }
        console.log(result)


        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/')
    }
    return (
        <div>
            {/*<Header/>*/}
            <h1>Авторизация</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="Логин"
                       onChange={(e)=> setLogin(e.target.value)} className="form-control"/>
                <br/>
                <input type="password" placeholder="Пароль"
                       onChange={(e)=> setPassword(e.target.value)} className="form-control"/>
                <br/>
                <button className="btn btn-primary" onClick={Login}>Войти</button>
            </div>
        </div>
    )
}
export default Login