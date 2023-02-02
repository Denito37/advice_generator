import { useState } from "react";

export default function Header(){
    const [count, setCount] = useState(0);
    const counter = () =>{
        setCount(count + 1)
    }
    return(
        <div className="px-4 py-1 w-fit mx-auto rounded-3xl bg-slate-700">
            <header>
                <h1 className="my-4 text-center text-4xl font-bold text-green-400">Roll#{count}</h1>
            </header>
        </div>
    )
    
}
