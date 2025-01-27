import { useState } from "react"
import Addtodoform from "./Addtodoform"

function Todotop(props) {

    const act=props.act
    const setact=props.setact
    const [search, setsearch] = useState("")
    const searchbar = (event) => {

        setsearch(event.target.value)

    }

    const btnclick = () => {

     setact([...act,{id:act.length+1,action:search}])
     setsearch([])
    }


    return (
        <>
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <input onChange={searchbar} value={search} className="border border-black mt-2 p-2" type="text " placeholder="Next Activity ?" />
            <button onClick={btnclick} className="borrder border-black bg-black text-white p-2">Add</button>
        </>
    )
}

export default Todotop