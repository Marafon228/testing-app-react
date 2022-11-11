import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function Login() {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])
    return (
        <div>
            <Header/>
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" className="form-control"/>
                <br/>
                <input type="text" placeholder="email" className="form-control"/>
                <br/>
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
export default Login