import { Address } from "./Address"
import { LOCATIONS } from "./BookingDetails"
import { InputBox } from "./InputBox"
import { LoadType } from "./PickupDetails"
import { Select } from "./Select"
import { SelectDate } from "./SelectDate"

export const DropDetails=()=>{
    return(
        <div className="bg-white p-4 rounded-lg my-4">
            <div className="font-semibold mb-4">Drop Details</div>
            <div className="flex flex-wrap">
                <InputBox label="Booking Reference"/>
                <SelectDate/>
                <Select label="SiteType" options={LOCATIONS}/>
                <InputBox label="Enter Weight"/>
                <Select label="Type of Load" options={LoadType}/>
                <InputBox label="Enter Drop Site Person Name"/>
                <InputBox label="Enter Drop Site Contact Number"/>
                <InputBox label="Enter Drop Site Company Name"/>
                <InputBox label="Enter Drop Instructions"/>
            </div>
            <Address type='Drop'/>
        </div>
    )
}