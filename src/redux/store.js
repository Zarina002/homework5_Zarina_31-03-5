import { createStore} from "redux";
import storageReducer from "./storageReducer";

export const store = createStore(storageReducer)