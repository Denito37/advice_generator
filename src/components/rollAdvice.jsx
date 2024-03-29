import { Dice, DividerDesktop } from '../assets';

export default function Advice({counter , setQuote, advice, id}){
    const getQuote = async () =>{
        setQuote()
        counter()
    }

    return(
        <>
            <section className="grid bg-gray-800 max-w-md min-h-fit border-0 rounded-2xl p-8 mx-auto mt-4 mb-8 relative ">
                <h2 className=" text-green-400 text-center text-xl font-bold">Advice# {id} </h2>
                <p className=" text-slate-200 text-center pb-2 h-40 text-3xl overflow-scroll">{advice}</p>
                <img src={DividerDesktop} alt="divider" className="my-4" />
                <button 
                className="  border border-green-400 bg-green-400 p-4 my-2 w-14 h-14 rounded-full absolute bottom-[-2.25rem] left-0 right-0 mx-auto disabled:grayscale disabled:hover:bg-green-400" onClick={getQuote} disabled = { typeof advice != 'string'}>
                    <img src={Dice} alt="roll dice" className=" transition-all" />
                </button>
            </section>
        </>
    )
}