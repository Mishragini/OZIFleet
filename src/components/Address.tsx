"use client"
import { useReducerArray } from '@/hooks/UseReducerArray';
import { InputBox } from './InputBox';
import { Select } from './Select';

const COUNTRIES = ['Australia', 'New Zealand', 'USA', 'Add'];
const STATES = ["Victoria", "Australian Capital Territory", "New South Wales", "Queensland", "South Australia", "Tasmania", "Western Australia", "Add"];



export const Address = ({type}:{type:'Pickup'|'Drop'}) => {
    const{state,increaseArraySize,decreaseArraySize}=useReducerArray();
    if(state===1) {
        const AddedFeild=false;
    }
    

    const renderAddressFields = () => {
        const addressFields = [];
        for (let i = 0; i < state; i++) {
            addressFields.push(
                <div key={i}>
                    <div className='flex justify-between'>
                    <div className=" mb-4">{type} Address{(i==0)?"":i}</div>
                    {(i>0)?<button onClick={decreaseArraySize} className='text-gray-500'>X</button>:""}
                    </div>
                    <div className="flex flex-wrap">
                    <InputBox label={`Street1`} />
                    <InputBox label={`Street2`} />
                    <InputBox label={`Suburb`} />
                    <Select label={`State`} options={STATES} />
                    <Select label={`Country`} options={COUNTRIES} />
                    <InputBox label={`Post Code`} />
                     </div>
                </div>   
            );
        }
        return addressFields;
    };

    return (
        <div className="bg-white rounded-lg my-2">
            {renderAddressFields()}
            <button onClick={increaseArraySize} className='p-2 rounded-full bg-blue-700 text-white mt-2'>Add More {type} Locations</button>
        </div>
    );
};
