"use client"
import { useReducer } from 'react';

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

export const InputBox = ({ label, value: propValue }: {
    label: string,
    value?: string
}) => {
    const [value, dispatch] = useReducer(inputReducer, propValue || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_VALUE', payload: e.target.value });
    };

    return (
        <div className="bg-gray-100 p-2 rounded-lg w-96 m-1">
            <div className="text-sm text-gray-400 mb-1">{label}</div>
            <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                className="focus:outline-none bg-transparent"
            />
        </div>
    );
};
