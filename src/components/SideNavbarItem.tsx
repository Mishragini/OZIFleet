import React from "react"

export const SideNavbarItem=({title,icon}:{title:string,icon:React.ReactNode})=>{
    return(
        <div className="flex bg-white text-normal font-medium p-4">
            <div className="mr-2">{icon}</div>
            <div>{title}</div>
        </div>
    )
}