import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

/*export const addToCart = (data) => {
    console.warn("action is called", data)
    let store = JSON.parse(localStorage.getItem('store'))
    store.push(data);
    //localStorage.setItem("store",JSON.stringify(data))
    return {
        type: ADD_TO_CART,
        data
    }
}*/

export const addToCart = (data) => {
    let store = JSON.parse(localStorage.getItem('store')) || [];
    const productIndex = store.findIndex(item => item.Id === data.Id);

    if (productIndex !== -1) {
        // Product already exists in cart, update cart quantity
        store[productIndex].quantity++;

    } else {
        // Product does not exist in cart, add it with cart quantity of 1
        const newProductData = {
            ...data,
            quantity: 1,
        };
        store.push(newProductData);
    }

    // Update local storage
    localStorage.setItem("store", JSON.stringify(store));

    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const  emptyCart = () => {
    localStorage.removeItem(
        "store"
    )
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}