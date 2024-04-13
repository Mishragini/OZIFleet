export const TotolAmountInput=({value}:{value:string})=>{
    return(
        <div className="bg-gray-100 p-2 rounded-lg w-96 m-1">
            <div className="text-sm text-gray-400 mb-1">Total Amount</div>
            <input 
                type="text" 
                value={value} 
                className="focus:outline-none bg-transparent"
            />
        </div>
    )
}