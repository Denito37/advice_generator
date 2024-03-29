
export default function Likes({storage, remove}){
    let key = 0
    const likeList = storage.map(store =>
        <div key={key} className=" grid grid-cols-6 my-3 min-h-[3.4rem] items-center">
            <li className=" col-span-5" key={key++}>{store}</li>
            <button key={key} onClick = {remove} className=" py-2 px-4 w-fit h-fit bg-gray-700 text-green-400 hover:bg-gray-600 justify-self-center rounded-full border border-transparent">
                ×
            </button>
        </div>)
    
    return(
        <section className="bg-gray-800 rounded-2xl max-w-md md:min-w-full mx-auto my-12 p-8">
            <h2 className=" text-green-400 py-2 font-bold text-center text-xl">Likes</h2>
            <ul className="text-slate-200 text-xl p-4 max-h-[28rem] overflow-y-scroll">{likeList}</ul>
        </section>
    )
}