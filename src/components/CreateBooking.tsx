import { BookingDetails } from "./BookingDetails"
import { BookingInformation } from "./BookingInformation"
import { PickupDetails } from "./PickupDetails"

export const CreateBooking=()=>{
    return(
        <div className="bg-gray-100 p-8 rounded-xl">
            <div className="text-2xl font-bold">Create Booking</div>
            <BookingInformation/>
            <BookingDetails/>
            <PickupDetails/>
        </div>
    )
}