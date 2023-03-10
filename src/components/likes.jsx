import { useState,useEffect } from "react"

export default function Likes({storage}){
    let key = 0
    const likeList = storage.map(store =><li key={key++}>{store}</li>)
    
    return(
        <section className="bg-slate-700 rounded-2xl max-w-md max-h-[28rem] overflow-y-scroll md:min-w-full mx-auto my-12 p-8">
            <h4 className=" text-green-400 font-bold text-center text-xl">Likes</h4>
            <p className="text-slate-200 text-xl p-6">{likeList}</p>
        </section>
    )
}