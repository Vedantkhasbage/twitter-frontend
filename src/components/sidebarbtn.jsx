


export const SideButtonC=({text,height,width,Icon})=>{

    return <button className={`h-${height} mb-4 text-center items-center flex rounded-2xl bg-black text-white hover:bg-gray-900 w-${width}`}>
     <span className="ml-2"> {Icon} </span> <span className="ml-4">{text}</span>
    </button>
}