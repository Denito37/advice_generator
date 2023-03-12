import { useState,useEffect } from "react"

export default function Likes({list}){

    const likeList = list.map(li => <li>{li}</li>)
    
    return(
        <section className="bg-slate-700 rounded-2xl max-w-md md:min-w-full mx-auto my-12 p-8">
            <h4 className=" text-green-500 font-bold text-center text-xl">Likes</h4>
            <p className="text-slate-200 text-xl p-6">{likeList}</p>
        </section>
    )
}