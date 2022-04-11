import { Action } from "./action";

export interface TokenState{
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {

    switch(action.type){
        case "ADD_Token":{
            return { tokens: action.payload}
        }
        default:
            return state
    }

}