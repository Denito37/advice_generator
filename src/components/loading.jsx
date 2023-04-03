import { Load } from "../assets"
export default function Loading(){

    return(
        <>
            <img className=" animate-spin mx-auto" src={Load} width={'125px'} height={'125px'}></img>
        </>
    )
}