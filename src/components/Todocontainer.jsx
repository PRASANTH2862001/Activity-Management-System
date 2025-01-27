import Addtodoform from "./Addtodoform"
import Todotop from "./Todotop"
import { useState } from "react"

function Todoconatiner() {

    const [act,setact] = useState([
    //     id: 1,
    //     action: "go to school"
    // },
    // {
    //     id:2,
    //     action:"have break fast"
    // },{
    //     id:3,
    //     action:"listen a class"
    // }
    ])
    return (
        <>
            <div className="mt-6 flex flex-wrap ">
                <div>
               <Todotop act={act} setact={setact}/>
                </div>
                <Addtodoform act={act} setact={setact} />

            </div>


        </>
    )
}
export default Todoconatiner