import  { useReducer } from 'react';

interface InputAction {
    type: 'SET_VALUE';
    payload: string;
}

const inputReducer = (state: string, action: InputAction) => {
    switch (action.type) {
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
};

export const useSetReducer=(initialValue:string='')=>{
return useReducer(inputReducer,initialValue);

}