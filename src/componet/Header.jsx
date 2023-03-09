import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{display:'flex'}}>
        <Link to="/books" > books</Link>
        <Link to="/profile">profile</Link>

    </div>
  )
}
