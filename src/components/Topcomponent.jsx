import Listactivity from "./Listactivity"
import Todoconatiner from "./Todocontainer"


function Topcomponent(props) {
 
    return (
        <>
            <div className="bg-white p-12  border rounded-md ">
                <h1 className="font-medium text-3xl">Hello {props.name1}!</h1>
                <p className="font-medium"> I help you manage your activities:)</p>
                <div >

                    <div className="flex gap-5 mt-6 flex-wrap">

                        <Listactivity color={"#685BAE"} title={"22.5°"} subtitle={"chennai"} ></Listactivity>
                        <Listactivity color={"#CA524E"} title={"December"} subtitle={"2.25 PM"}></Listactivity>
                        <Listactivity color={"#CA8201"} title={"Build Using"} subtitle={"React"}></Listactivity>
                    </div>
                    

                </div>
                <div>
                    <Todoconatiner/>
                </div>
            </div>


        </>

    )
}

export default Topcomponent