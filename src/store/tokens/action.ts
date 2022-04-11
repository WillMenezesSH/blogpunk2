export type Action = {type: "ADD_Token"; payload: string}

export const addToken = (token: string): Action => ({
        type: "ADD_Token",
        payload: token

})