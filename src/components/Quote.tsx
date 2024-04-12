import { InputBox } from "./InputBox"
import { Select } from "./Select"

const PAYMENT_TYPE=["Credit Card","NetBanking"]
const PERCENTAGE=["5","12","18","28"]
export const Quote=({type}:{type:"Customer"|"Final"|"Net"})=>{
    return(
        <div className="bg-white rounded-lg my-4">
            <div>{type} Quote</div>
            <div className="flex flex-wrap">
               <Select label="Select Payment Type" options={PAYMENT_TYPE}/>
               <InputBox label="Enter Price"/>
               <Select label="GST" options={PERCENTAGE}/>
               <Select label="Fuel Levy" options={PERCENTAGE}/>
               <InputBox label="TotalAmount"/>
               {(type==='Net')?<InputBox label="TotalProfit"/>:""}
            </div>
        </div>
    )
}