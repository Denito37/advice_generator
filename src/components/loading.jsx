import { Load } from "../assets"
export default function Loading(){

    return(
        <>
            <img className=" animate-spin mx-auto" src={Load} width={'150px'} height={'150px'}></img>
        </>
    )
}