"use client"
import { useReducer } from 'react';

interface SelectAction {
    type: 'SET_VALUE';
    payload: string;
}

const selectReducer = (state: string, action: SelectAction) => {
    switch (action.type) {
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
};

interface SelectProps {
    label: string;
    options: string[];
    onSelectChange?: (value: string) => void;
}

export const Select = ({ options, label, onSelectChange }:SelectProps) => {
    const [value, dispatch] = useReducer(selectReducer, '');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        dispatch({ type: 'SET_VALUE', payload: selectedValue });
        if (onSelectChange) {
            onSelectChange(selectedValue);
        }
    };
    
    return (
        <div className="bg-gray-100 p-2 rounded-lg w-96 m-1">
            <div className="text-sm text-gray-400">{label}</div>
            <select 
                value={value} 
                onChange={handleChange} 
                className="bg-transparent text-gray-700 rounded-lg w-full p-2"
            >
                <option value="" disabled hidden className='text-gray-700'>Select</option> 
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
};
