import * as actions from "./actions/actions";

const initialState = {
    activePage: "home",
    products: [],
    shoppingCarts: []
};

export default function appState(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
