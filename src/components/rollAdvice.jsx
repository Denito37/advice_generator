import { useState } from "react"
import { Dice, DividerMobile, DividerDesktop } from '../assets';

export default function Advice(){
    const [advice, setAdvice] = useState('Roll for advice')
    const [id, setId] = useState('0')

    const getQuote = async () =>{
        const res = await fetch("https://api.adviceslip.com/advice" , { cache: "no-cache" });// * no-cache prevents repeated advice
        const data = await res.json();
        setAdvice(data.slip.advice);
        setId(data.slip.id)
    }

    return(
        <div>
            <section className="grid p-8 bg-slate-600 max-w-md min-h-fit border-0 rounded-2xl mx-auto my-8 relative">
                <h4 className=" text-green-400 text-center text-xl">Advice# {id} </h4>
                <p className=" text-white text-center h-40 text-3xl overflow-scroll">{advice}</p>
                <img src={DividerDesktop} alt="divider" className="my-4" />
                <button 
                className="dice text-white bg-green-400 p-4 mx-auto my-2 w-14 h-14 rounded-full" onClick={getQuote}>
                    <img src={Dice} alt="roll dice" />
                </button>
            </section>
        </div>
    )
}