import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers/root-reducer";

export const createAppStore = () => {
    let store = legacy_createStore(rootReducer);
    return store;
}