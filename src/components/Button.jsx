const colorvariant={
    blue:"bg-blue-400"
}


export const ButtonC=({text,height,width,color})=>{

    return <button className={`h-${height} rounded-xl text-white  ${colorvariant[color]} w-${width}`}>
        {text}
    </button>
}