import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appState from "./reducers";

// const store = createStore(appState, composeWithDevTools(applyMiddleware(thunk)));
const composeEnhancers = composeWithDevTools({
    appState,
    trace: true
});
const store = createStore(appState, composeEnhancers(applyMiddleware(thunk)));
export default store;
