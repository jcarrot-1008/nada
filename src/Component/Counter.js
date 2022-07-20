import { useState } from "react"

export default function Counter(){

    const [up, down] = useState(0);
    const pluse = () =>{
        down(a => a+1);
    }
    const minus = () =>{
        down(a => a-1);
    }

    return(
        <>
        <h1>{up}</h1>
        <button onClick={pluse}>+1</button>
        <button onClick={minus}>-1</button>
        </>
    )
}