import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import App from './App';
import "./index.css"; // Import Tailwind CSS
import Login from './components/Login';
import Signup from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {

      const [usename, setusename] = useState([
          {
              username: "Prasanth",
              password: "12345"
          }
      ])

  return (
    <>
      <Router>
        <nav>
      
        {/* <Link to={"/Home"} >Home</Link>| <Link to={"/Login"}>Login</Link> | <Link to={"/Signup"}>Signup</Link>  */}
      </nav>

        <Routes>
          {/* Define Routes */}
         
          <Route path="/" element={<Login usename={usename} setusename={setusename} />} />
          <Route path="/Signup" element={<Signup usename={usename} setusename={setusename}  />} />
          <Route path="/Home" element={<App/>} />
         

        </Routes>
      </Router>
    </>

  )
}
root.render(
  <div>
  <Main></Main>

  </div>



);

reportWebVitals();
