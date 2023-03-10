import React, { useState } from 'react';
import './Search.css';


export default function Search({ sr,setSr}) {
    // console.log(sr)
    // console.log(book.filter(b=>b.title.toLowerCase().includes(sr)))
    // setBook(()=>book.filter(b=>b.title.toLowerCase().includes(sr)))
 const handelChange=(e)=>{
    // console.log(e.target.value)
    setSr(e.target.value)
 }
 
 
  return (

    <div className='search_back'>
        {/* <p>Hello World</p> */}

        <div className='search_contunt'>
            <h3>find your faverit book</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eius! Similique voluptatibus a illo itaque ab ad iusto illum ipsam!</p>
            <input type="text" placeholder='Search Book ...' onChange={handelChange} />
        </div>


    </div>
  )
}
