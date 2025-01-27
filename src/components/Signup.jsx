import { Link } from "react-router-dom"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = (prop) => {
  var usenavigate=useNavigate()

  const usename = prop.usename
  const setusename = prop.setusename
  const [usedata, setuserdata] = useState("")
  const [usepassword, setusepassword] = useState("")

  const checkersername = (event) => {
    setuserdata(event.target.value)
  }
  const checkuserpassword = (event) => {
    setusepassword(event.target.value)
  }
  function adduser() {

    setusename([...usename, { username: usedata, password: usepassword}])
    usenavigate("/")

  }
  return (

    <div className="bg-black p-11 flex-wrap">
      <div className="bg-white p-6">
        <h1 className="text-3xl font-medium">Hii hii</h1>
        <p className="font-medium">
          Signup here :)
        </p>
        <div className="flex flex-col w-48">
          <input value={usedata} onChange={checkersername} className="border p-2 border-black mt-4 rounded-lg bg-transparent" type="text" placeholder="Username" />
          <input value={usepassword} onChange={checkuserpassword} className="border p-2 border-black mt-4 rounded-lg" type="password" placeholder="Password" />
          <input className="border p-2 border-black mt-4 rounded-lg bg-transparent" type="text" placeholder="Confirm Password" />

        </div>
        <button onClick={adduser} style={{ backgroundColor: "#CA8201" }} className="p-2 mt-4 rounded-lg px-2">Signup</button>

        <p>Already have an account ? <Link className="underline" to={"/Login"}>Login</Link> </p>
      </div>

    </div>

  )


}

export default Signup