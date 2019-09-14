import axios from "axios";

//Action Types
export const NAVIGATE = "NAVIGATE";
export const ADDTOCART = "ADDTOCART";
export const REMOVECART = "REMOVECART";
export const CHECKOUT = "CHECKOUT";
export const CHANGEQUANTITY = "CHANGEQUANTITY";
export const SETPRODUCTS = "SETPRODUCTS";

export function navigate(newPage) {
    return {
        type: NAVIGATE,
        newPage: newPage
    };
}

export function changeQuantity(cartId, newQuantity) {
    if (newQuantity === 0) {
        return removeCart(cartId);
    }
    return {
        type: CHANGEQUANTITY,
        payload: { cartId, newQuantity }
    };
}

export function removeCart(cartId) {
    return {
        type: REMOVECART,
        cartId
    };
}

export function checkout() {
    return {
        type: CHECKOUT
    };
}

export function addToCart(product) {
    return {
        type: ADDTOCART,
        product: product
    };
}

export function setProducts(products) {
    return {
        type: SETPRODUCTS,
        products
    };
}

export function fetchProducts() {
    return dispatch => {
        axios
            .get(
                "https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1"
            )
            .then(res => {
                const products = res.data.data.map(item => ({
                    id: item.id,
                    name: item.name,
                    img: item.img_url_mob,
                    original_price: item.original_price,
                    price: item.final_price,
                    rate: item.percent_star
                }));
                dispatch(setProducts(products));
            });
    };
}
