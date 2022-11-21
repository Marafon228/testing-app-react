import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {emptyCart} from "../redux/action";
import {useDispatch} from "react-redux";


function Order(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    let store = JSON.parse(localStorage.getItem("store"))

    const [description,setDescription]= useState("")
    const manuProducts = store
    const [loginUser]= useState(user.Login)

    async function order(){
        let item={description,loginUser,manuProducts}
        //console.warn(item)

        await fetch("http://192.168.0.101:3310/api/Orders/AddsProduct",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            }
        })
        dispatch(emptyCart())
        navigate(-2)
        //result = await result.json()
        //localStorage.setItem("user-info",JSON.stringify(result))
        //navigate('/');

        //console.warn("result",result)



    }
    /*function checkUser(){
        console.log(user.Login)
    }*/

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Order Page</h1>
            <input type="text" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="description" />
            <br />

            <button className="btn btn-primary" onClick={order} >Order</button>
        </div>
    );
}

export default Order;