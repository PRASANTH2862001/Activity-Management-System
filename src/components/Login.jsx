import { Link } from "react-router-dom"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = (prop) => {
    const usename=prop.usename

    var userfount=false
    const navigate=useNavigate()

  const [showerror,setshowerroe]=useState(true)
    const usercheck = () => {
        console.log(usename);
        
        usename.forEach((item) => {
            if (uname === item.username && pname === item.password) {
                console.log(" login confirmed");
                userfount=true
                navigate("/Home",{state:{user:uname}})
            }
            // else {
            //     console.log("failed");
            //     setshowerroe(false)

            // }
        })

        if(userfount===false){
            console.log("login failed");
            setshowerroe(false)
            
        }
    }
    const [uname, setuname] = useState("")
    const [pname, setpname] = useState("")

    const uchange = (event) => {

        setuname(event.target.value)

    }
    const pchange = (event) => {
        setpname(event.target.value)

    }



    return (
        <div className="bg-black p-11 flex-wrap">
            <div className="bg-white p-6">
                <h1 className="text-3xl font-medium">Hello :)</h1>
                {
                  showerror?<p className="font-medium">i help you manage your activities after you Login :)</p>:<p className="font-medium text-red-800">Please signup before login !! :)</p>
                }
                <div className="flex flex-col w-48">
                    <input value={uname} onChange={uchange} className="border p-2 border-black mt-4 rounded-lg bg-transparent" type="text" placeholder="Username" />
                    <input value={pname} onChange={pchange} className="border p-2 border-black mt-4 rounded-lg bg-transparent" type="password" placeholder="Password" />

                </div>
                <button onClick={usercheck} style={{ backgroundColor: "#685BAE" }} className="p-2 mt-4 rounded-lg px-2">Login</button>

                <p className="mt-2">Dont have an account ? <Link to={"/Signup"} className="underline"> Signup</Link></p>
            </div>

            <h1> Login</h1>

        </div>
    )
}


export default Login