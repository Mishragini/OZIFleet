import { InputBox } from "./InputBox"
import { Select } from "./Select"

const WORKING_OPTIONS=["9-5","10-4","Add"]
export const SiteDetails=()=>{
    return(
        <div className="bg-white p-4 rounded-lg my-4">
            <div className="font-semibold mb-4">Site Details</div>
            <div className="flex flex-wrap ">
                <InputBox label="Site Entry Pin"/>
                <Select label="Site Working Hours" options={WORKING_OPTIONS}/>
            </div>
        </div>
    )
}