import { Dice, DividerDesktop } from '../assets';

export default function Advice({counter , setQuote, advice, id}){
    const getQuote = async () =>{
        setQuote()
        counter()
    }

    return(
        <>
            <section className="grid bg-slate-700 max-w-md min-h-fit border-0 rounded-2xl p-8 mx-auto my-8 relative ">
                <h4 className=" text-green-400 text-center text-xl font-bold">Advice# {id} </h4>
                <p className=" text-slate-200 text-center pb-2 h-40 text-3xl overflow-scroll">{advice}</p>
                <img src={DividerDesktop} alt="divider" className="my-4" />
                <button 
                className="dice hover:animate-spin border border-green-500 text-white bg-green-400 p-4 mx-auto my-2 w-14 h-14 rounded-full" onClick={getQuote}>
                    <img src={Dice} alt="roll dice" className=" transition-all" />
                </button>
            </section>
        </>
    )
}