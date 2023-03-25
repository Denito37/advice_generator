
export default function Footer(){
    return(
        <>
            <footer className="text-center col-span-2 p-4 mx-auto md:grid md:grid-cols-3 md:max-w-lg">
                <h2 className=" text-slate-100 text-xl p-1">
                    Coded by : 
                    <a className=" p-1 rounded-md transition-colors hover:bg-slate-700 hover:text-green-400" href="https://denito37.github.io/wdp/" target="_blank" rel="noopener noreferrer">
                        ME    
                    </a>
                </h2>
                <h2 className=" text-slate-100 text-lg text-center p-1">
                    <a className=" p-1 rounded-md transition-colors hover:bg-slate-700 hover:text-green-400" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </h2>
                <h2 className=" text-slate-100 text-lg text-center p-1">
                    <a className=" p-1 rounded-md transition-colors hover:bg-slate-700 hover:text-green-400" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </h2>
            </footer>
        </>
    )
}