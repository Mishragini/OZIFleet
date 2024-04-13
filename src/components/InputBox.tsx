"use client"
import { useSetReducer } from '@/hooks/useSetReducer';
import  { useReducer } from 'react';


interface InputBoxProps {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
}

export const InputBox = ({ label, value: propValue, onChange }:InputBoxProps) => {
    const [value, dispatch] = useSetReducer(propValue || '');

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
                className="focus:outline-none bg-transparent"
            />
        </div>
    );
};
