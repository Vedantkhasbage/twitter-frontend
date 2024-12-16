import { forwardRef } from "react"

const heightvariant={
    4:"h-4",
    12:"h-12",
    32:"h-32",
    20:"h-20",
   8:"h-8"
}

export const InputC=forwardRef(({placeholder,height,width},ref)=>{

    return <input ref={ref} className={`${heightvariant[height]} ${width} rounded-xl outline-none border-2`} type="text" placeholder={`${placeholder}`} />
})