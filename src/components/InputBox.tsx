"use client"
import React, { useReducer } from 'react';

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

interface InputBoxProps {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean; 
}

export const InputBox = ({ label, value: propValue, onChange, disabled }:InputBoxProps) => {
    const [value, dispatch] = useReducer(inputReducer, propValue || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        dispatch({ type: 'SET_VALUE', payload: inputValue });
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="bg-gray-100 p-2 rounded-lg w-96 m-1">
            <div className="text-sm text-gray-400 mb-1">{label}</div>
            <input 
                type="text" 
                value={value} 
                onChange={handleChange} 
                disabled={disabled} 
                className="focus:outline-none bg-transparent"
            />
        </div>
    );
};
