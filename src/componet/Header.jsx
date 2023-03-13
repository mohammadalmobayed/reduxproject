import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { authActions } from '../store/authSlice';
import './Header.css'


export default function Header() {
  const dispatch = useDispatch();
  const handelLogout = ()=>{
    localStorage.removeItem('user')
    dispatch(authActions.logout())
  }
  return (

    <div className='navbar' style={{display:'flex'}}>
      
        <Link className='navbar_link' to="/books" > books</Link>
        <Link className='navbar_link' to="/profile">profile</Link>
        <Link className='navbar_link' to="/"><button style={{border: 'none', background: 'transparent', fontSize:'1rem'}} onClick={handelLogout}>Logout</button></Link>
      

    </div>


   
  )
}

