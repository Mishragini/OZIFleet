import { InputBox } from "./InputBox"
import { Select } from "./Select";

const COMPANIES=["BlackBull Trans","BlinkSphere Dynamics","BlockEdge Systems","BlueSkye Industries"]
const VIA=["Email","Call"]
export const BookingInformation=()=>{
    const BookingId = Math.floor(Math.random() * 10000000000).toString();
    return(
        <div className="bg-white p-4 rounded-lg my-4">
            <div className="font-semibold mb-4">Booking Information</div>
            <div className="flex flex-wrap">
                <InputBox label="Booking ID" value={BookingId}/>
                <Select label="Select Company" options={COMPANIES} />
                <InputBox label="Client ID" />
                <Select label="Booking via" options={VIA}/>
                <InputBox label="Caller Name"/>
                <InputBox label="Contact Number"/>
                <InputBox label="Booking Reference"/>
            </div>
        </div>
    )
}