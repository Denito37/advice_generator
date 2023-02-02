import { Like, Delete} from '../assets';
export default function Buttons(){
    return(
        <div className="grid grid-cols-2 w-fit mx-auto my-12 gap-20">
            <button className="btn border border-green-500 bg-green-500 rounded-full p-4 w-fit"><img src={Like} alt="Like" /></button>
            <button className="btn border border-green-500 bg-green-500 rounded-full p-4 w-fit"><img src={Delete} alt="delete" /></button>
        </div>
    )
}