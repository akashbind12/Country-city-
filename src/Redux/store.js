import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { cityReducer } from "./city/reducer";
import { countrysReducer } from "./country/reducer";


const rootReducer = combineReducers({
    countrys: countrysReducer,
    citys : cityReducer
})


const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

    
const store = legacy_createStore(rootReducer, enhancer)




store.subscribe(() => {
    console.log("Subscribe", store.getState());
});


export default store