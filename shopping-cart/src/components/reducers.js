import { NAVIGATE, ADDTOCART, CHECKOUT, CHANGEQUANTITY, REMOVECART, SETPRODUCTS } from "./actions/actions";

const initialState = {
    activePage: "sssss",
    products: [],
    shoppingCarts: []
};

function setProducts(state, action) {
    return { ...state, products: action.products };
}

function navigate(state, action) {
    return { ...state, activePage: action.newPage };
}

function addToCart(state, action) {
    let { product } = action;
    let newCartItem;
    let newShoppingCart;
    const { shoppingCarts } = state;
    const productInCartIndex = shoppingCarts.findIndex(item => item.id === product.id);
    if (productInCartIndex === -1) {
        newCartItem = { ...product, quantity: 1 };
        newShoppingCart = [...shoppingCarts, newCartItem];
    } else {
        newShoppingCart = [...shoppingCarts];
        newShoppingCart[productInCartIndex].quantity++;
    }
    return { ...state, shoppingCarts: newShoppingCart };
}

function checkout(state) {
    return { ...state, shoppingCarts: [] };
}

function removeCart(state, action) {
    const { shoppingCarts } = state;
    const index = shoppingCarts.findIndex(item => item.id === action.cartId);
    const newShoppingCarts = [...shoppingCarts];
    newShoppingCarts.splice(index, 1);
    return { ...state, shoppingCarts: newShoppingCarts };
}

function changeQuantity(state, action) {
    const { shoppingCarts } = state;
    const { cartId, newQuantity } = action.payload;
    const index = shoppingCarts.findIndex(item => item.id === cartId);
    const newShoppingCarts = [...shoppingCarts];
    newShoppingCarts[index].quantity = newQuantity;
    return { ...state, shoppingCarts: newShoppingCarts };
}

export default function appState(state = initialState, action) {
    switch (action.type) {
        case NAVIGATE:
            return navigate(state, action);
        case ADDTOCART:
            return addToCart(state, action);
        case CHECKOUT:
            return checkout(state);
        case REMOVECART:
            return removeCart(state, action);
        case CHANGEQUANTITY:
            return changeQuantity(state, action);
        case SETPRODUCTS:
            return setProducts(state, action);
        default:
            return state;
    }
}
