import { Quote } from "./Quote"

export const PricingCharges=()=>{
    return(
        <div className="bg-white p-4 rounded-lg">
            <div  className="font-semibold mb-4">Pricing & Charges</div>
            <Quote type='Customer'/>
            <Quote type='Final'/>
            <Quote type="Net"/>
        </div>
    )
}