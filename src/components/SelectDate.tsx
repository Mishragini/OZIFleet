"use client"
import { useReducer } from 'react';

interface SelectDateAction {
    type: 'SET_VALUE';
    payload: string;
}

const selectDateReducer = (state: string, action: SelectDateAction) => {
    switch (action.type) {
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
};

export const SelectDate = () => {
    const [value, dispatch] = useReducer(selectDateReducer, '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_VALUE', payload: e.target.value });
    };

    return (
        <div className="w-96 bg-gray-100 rounded-lg p-2 m-1">
            <div className="text-sm text-gray-400 mb-1">Select Date</div>
            <div className='relative'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input 
                    type="date" 
                    value={value} 
                    onChange={handleChange} 
                    className="bg-transparent focus:outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 pr-2.5 py-1.0" 
                    placeholder="Select date" 
                />
            </div>
        </div>
    );
};
