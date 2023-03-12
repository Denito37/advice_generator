
export default function Header({count}){
    return(
        <div className="px-4 py-1 w-fit mx-auto rounded-3xl bg-slate-800">
            <header>
                <h1 className="my-4 text-center text-4xl font-bold text-green-400">Roll#{count}</h1>
            </header>
        </div>
    )
    
}
