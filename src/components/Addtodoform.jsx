import { useState } from "react"
import Todoitem from "./Todoitem"

function Addtodoform(props) {

    const act= props.act
    const setact = props.setact


    return (
        <>
            <div className=" p-3 flex-grow ml-3" style={{ backgroundColor: "#9890BC" }}>
                <h1 className="text-3xl font-medium">Today Acticity</h1>
                <p className="text-2xl font-medium" style={{ display: act.length === 0 ? "block" : "none" }}>you have not added any activity yet</p>
                {
                    act.map((item, index) => {
                        return <Todoitem item={item} index={index} setact={setact} id1={item.id} act={act}></Todoitem>
                    })
                }
            </div>


        </>
    )
}

export default Addtodoform