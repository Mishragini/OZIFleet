import { BookingDetails } from "./BookingDetails"
import { BookingInformation } from "./BookingInformation"
import { DropDetails } from "./DropDetails"
import { PickupDetails } from "./PickupDetails"
import { PricingCharges } from "./PricingCharges"
import { SiteDetails } from "./SiteDetails"

export const CreateBooking=()=>{
    return(
        <div className="bg-gray-100 p-8 rounded-xl">
            <div className="text-2xl font-bold">Create Booking</div>
            <BookingInformation/>
            <BookingDetails/>
            <PickupDetails/>
            <DropDetails/>
            <SiteDetails/>
            <PricingCharges/>
            <div className="flex justify-end"> 
                <button className="bg-blue-700 px-4 py-2 rounded-full text-white my-2">Submit</button>
            </div>
        </div>
    )
}