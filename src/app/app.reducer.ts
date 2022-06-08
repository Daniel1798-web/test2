import {Action}  from "@ngrx/store";

export interface testState {
    mensaje : string
}

export const initialState = {
    mensaje : "codigo Mentor"
}


export function miReducer(state : testState = initialState, action: Action){
console.log(action)
}