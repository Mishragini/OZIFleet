"use client"
import { useReducer } from "react";
import { InputBox } from "./InputBox";
import { Select } from "./Select";
import { TotolAmountInput } from "./TotalAmountInput";

const PAYMENT_TYPE = ["Credit Card", "NetBanking"];
const PERCENTAGE = ["5", "12", "18", "28"];

interface State {
    gst: string;
    fuelLevy: string;
    price: string;
    totalAmount: string;
}

type Action =
    | { type: "SET_GST"; payload: string }
    | { type: "SET_FUEL_LEVY"; payload: string }
    | { type: "SET_PRICE"; payload: string }
    | { type: "CALCULATE_TOTAL_AMOUNT" };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_GST":
            return { ...state, gst: action.payload };
        case "SET_FUEL_LEVY":
            return { ...state, fuelLevy: action.payload };
        case "SET_PRICE":
            return { ...state, price: action.payload };
        case "CALCULATE_TOTAL_AMOUNT":
            if (state.price && state.gst && state.fuelLevy) {
                const totalPrice = parseFloat(state.price);
                const gstAmount = parseFloat(state.gst) / 100 * totalPrice;
                const fuelLevyAmount = parseFloat(state.fuelLevy) / 100 * totalPrice;
                const total = totalPrice + gstAmount + fuelLevyAmount;
                return { ...state, totalAmount: total.toFixed(2).toString() };

            }
            return state;
        default:
            return state;
    }
};
export const Quote = ({ type }:{ type: "Customer" | "Final" | "Net" }) => {
    const [state, dispatch] = useReducer(reducer, {
        gst: "",
        fuelLevy: "",
        price: "",
        totalAmount: "",
    });
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch({ type: "SET_PRICE", payload: value });
        calculateTotalAmount(); 
    };

    const handleSelectChange = (value: string, label: string) => {
        if (label === "GST") dispatch({ type: "SET_GST", payload: value });
        else if (label === "Fuel Levy") dispatch({ type: "SET_FUEL_LEVY", payload: value });
        calculateTotalAmount(); 
    };

    const calculateTotalAmount = () => {
        dispatch({ type: "CALCULATE_TOTAL_AMOUNT" });
    };

    return (
        <div className="bg-white rounded-lg my-4">
            <div>{type} Quote</div>
            <div className="flex flex-wrap">
                <Select label="Select Payment Type" options={PAYMENT_TYPE} />
                <InputBox label="Enter Price" value={state.price} onChange={handleInputChange} />
                <Select label="GST" options={PERCENTAGE} onSelectChange={(value) => handleSelectChange(value, "GST")} />
                <Select label="Fuel Levy" options={PERCENTAGE} onSelectChange={(value) => handleSelectChange(value, "Fuel Levy")} />
                <TotolAmountInput value={state.totalAmount} />
                {type === "Net" && <InputBox label="Total Profit" />}
            </div>
        </div>
    );
};


