import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../config/firebase';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [log,setlog]=useState(false);
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setlog(true);
                console.log("User is logged in");
            }
            else{
                setlog(false);
                console.log("No user is logged in");
            }
        })
    },[])
    

    function handleLogout(){
        signOut(auth);
    }

    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>
            {log? <button className='button-style hidden md:block' onClick={handleLogout}>LogOut</button>: <button onClick={() => navigate("/login")} className='button-style hidden md:block'>Login</button>}
        </div>
    </div>
  )
}

export default Navbar