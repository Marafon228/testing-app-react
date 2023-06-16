import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {emptyCart} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {IP} from "../const/global"
const { geolocation } = navigator;
function Order(props) {
    let latitude = 0;
    let longitude = 0;
    if (geolocation) {
        geolocation.getCurrentPosition(
            (position) => {
                //const { latitude, longitude } = position.coords;
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                latitude.toFixed(8)
                longitude.toFixed(8)
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            },
            (error) => {
                console.error(error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
    const cartData = useSelector((state) => state.cartData);
    const uniqueProducts = cartData.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.Id === item.Id
            ))
    );
    let productCount = {};
    if (cartData) {
        cartData.forEach(item => {
            if (productCount[item.Id]) {
                productCount[item.Id]++;
            } else {
                productCount[item.Id] = 1;
            }
        });

        let amount = cartData.length && cartData.map(item => item.Price).reduce((prev, next) => prev + next);
        console.warn(amount);
    }
    let amount = cartData.length && cartData.map(item => item.Price).reduce((prev, next) => prev + next);


    const dispatch = useDispatch();
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    let store = JSON.parse(localStorage.getItem("store"))
    const [description,setDescription]= useState("")
    const manuProducts = store
    const [loginUser]= useState(user.Login)
    async function order(){
        let item={latitude,longitude,description,loginUser,manuProducts}
        await fetch(IP + "/api/Orders/AddsProduct",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            }
        })
        dispatch(emptyCart())
        navigate(-2)
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Оформление заказа</h1>
            <table>
                <thead>
                <tr>
                    <th>Продукт</th>
                    <th>Количество</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {uniqueProducts.map((sp) => (
                <tr>
                    <td>{sp.Name}</td>
                    <td>{productCount[sp.Id] || 0}</td>
                    <td>{sp.Price}</td>
                </tr>
                ))}
                </tbody>
            </table>
            <p>Всего: {amount}</p>
            <textarea className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Описание" />
            <br/>
            <button className="btn btn-primary" onClick={order}>
                Оформить заказ
            </button>
        </div>

    );
}
export default Order;