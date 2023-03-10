import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (

    <div className='navbar' style={{display:'flex'}}>
      
        <Link className='navbar_link' to="/books" > books</Link>
        <Link className='navbar_link' to="/profile">profile</Link>
        <Link className='navbar_link' to="/">Login</Link>
      

    </div>


   
  )
}

