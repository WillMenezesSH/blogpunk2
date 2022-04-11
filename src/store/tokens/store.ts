import { tokenReducer } from './tokensReducer';
import { createStore} from "redux";



const store = createStore(tokenReducer)

export default store;