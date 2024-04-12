"use client"
import  { useReducer, useEffect, ChangeEvent } from "react";
import { InputBox } from "./InputBox";
import { Select } from "./Select";

interface ActionCalculate {
    type: 'SET_PRICE' | 'SET_GST' | 'SET_FUEL_LEVY';
    payload: number;
}

const reducerCalculate = (state: any, action: ActionCalculate) => {
    switch (action.type) {
        case 'SET_PRICE':
            return { ...state, price: action.payload };
        case 'SET_GST':
            return { ...state, gst: action.payload };
        case 'SET_FUEL_LEVY':
            return { ...state, fuelLevy: action.payload };
        default:
            return state;
    }
}

const PAYMENT_TYPE = ["Credit Card", "NetBanking"]
const PERCENTAGE = ["5", "12", "18", "28"]

export const Quote = ({ type }: { type: "Customer" | "Final" | "Net" }) => {
    const [state, dispatch] = useReducer(reducerCalculate, {
        price: 0,
        gst: 0,
        fuelLevy: 0,
    })

    const calculateTotalAmount = () => {
        const totalPrice = state.price || 0;
        const totalGST = state.gst || 0;
        const totalFuelLevy = state.fuelLevy || 0;
        return totalPrice + (totalPrice * (totalGST / 100)) + (totalPrice * (totalFuelLevy / 100));
    }

    useEffect(() => {
       calculateTotalAmount() ;
    }, []);

    return (
        <div className="bg-white rounded-lg my-4">
            <div>{type} Quote</div>
            <div className="flex flex-wrap">
                <Select label="Select Payment Type" options={PAYMENT_TYPE} />
                <InputBox label="Enter Price" onChange={(e:ChangeEvent<HTMLInputElement>) => dispatch({ type: 'SET_PRICE', payload: Number(e.target.value) })} />
                <Select label="GST" options={PERCENTAGE} onChange={(e:ChangeEvent<HTMLSelectElement>) => dispatch({ type: 'SET_GST', payload: Number(e.target.value) })} />
                <Select label="Fuel Levy" options={PERCENTAGE} onChange={(e:ChangeEvent<HTMLSelectElement>) => dispatch({ type: 'SET_FUEL_LEVY', payload: Number(e.target.value) })} />
                <InputBox label="Total Amount" value={calculateTotalAmount()} />
                {(type === 'Net') ? <InputBox label="" /> : <InputBox label="Total Profit" />}
            </div>
        </div>
    )
}
