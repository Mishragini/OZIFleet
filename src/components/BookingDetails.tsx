import { Select } from "./Select"

export const LOCATIONS=["Melbourne","Brinsbane","Perth","Adelaide","Add"]
const SERVICES=["Ordinary","Overnight","Shuttle","Local","Express","Add"]
const VEHICLES=["Freezer Trailer A","Freezer Trailer B","Both Trailer A and Trailer B","Add"]
const GOODS_TYPE=["Dangerous","Perishable","Temp Control","Add"]
export const BookingDetails=()=>{
    return(
        <div className="bg-white p-4 rounded-lg my-4">
            <div className="font-semibold mb-4">Booking Information</div>
            <div className="flex flex-wrap ">
                <Select label="From" options={LOCATIONS} />
                <Select label="To" options={LOCATIONS} />
                <Select label="Type of Service" options={SERVICES}/>
                <Select label="Type of Vehicle" options={VEHICLES}/>
                <Select label="Type of Goods" options={GOODS_TYPE}/>
            </div>
        </div>
    )
}