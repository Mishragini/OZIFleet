import { useReducer } from "react";

interface ChangeArraySize {
    type: 'INCREASE' | 'DECREASE';
}

const reducer = (state: number, action: ChangeArraySize) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
};

export const useReducerArray = () => {
    const [state, dispatch] = useReducer(reducer, 1);

    const increaseArraySize = () => {
        dispatch({ type: 'INCREASE' });
    };

    const decreaseArraySize = () => {
        dispatch({ type: 'DECREASE' });
    };

    return { state, increaseArraySize, decreaseArraySize };
};