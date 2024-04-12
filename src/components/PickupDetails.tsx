import { LOCATIONS } from "./BookingDetails"
import { InputBox } from "./InputBox"
import { PickupAddress } from "./PickupAddress"
import { Select } from "./Select"
import { SelectDate } from "./SelectDate"

const LoadType=["Roll",'Pallets','Add']

export const PickupDetails=()=>{
    return(
        <div className="bg-white p-4 rounded-lg my-4">
            <div className="font-semibold mb-4">Pickup Details</div>
            <div className="flex flex-wrap">
                <InputBox label="Booking Reference"/>
                <SelectDate/>
                <Select label="Site Type" options={LOCATIONS}/>
                <InputBox label="Enter weight"/>
                <Select label="Type of Load" options={LoadType}/>
                <InputBox label="Enter Pickup Site Person Name"/>
                <InputBox label="Enter Pickup Site Contact Number"/>
                <InputBox label="Enter Pickup Site Company Name"/>
                <InputBox label="Enter Pickup Instructions"/>
            </div>
            <PickupAddress/>
        </div>
    )
}