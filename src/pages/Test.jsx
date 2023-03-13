import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookService from '../apis/BookService';
import Header from '../componet/Header';

import { authActions } from '../store/authSlice';
import { FaBookOpen } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";

import './test.css'


function Test() {
    // const user = useSelector(state=>state.isLoggedIn)
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const [book, setBook] = useState([])
    // console.log(user)
    const [bookData, setBookData] = useState({
        myImage:"",
        description:"",
        user_id:user.id,
        author:"",
        title:"",
      });

      useEffect(()=>{
        if(user){
          dispatch(authActions.login())
        }
        BookService.getUserBook({id:user.id}).then(function(res){
        setBook(res.data)
            console.log(res)
            // setReRender({render: true})
            
            }) 
    
      },[])

      const handleChange = (e)=>{
        const newData = { ...bookData }
        newData[e.target.name] = e.target.value
        setBookData(newData)
        console.log(newData)
      }

      const handleImage = (event) => {
        const newData = { ...bookData }
        newData[event.target.name] = event.target.files[0]
        setBookData(newData)
        console.log(newData)
      };

      const handelsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('book_img', bookData.myImage)
        formData.append('description', bookData.description)
        formData.append('user_id', bookData.user_id)
        formData.append('title', bookData.title)
        formData.append('author', bookData.author)
        
        console.log(formData.get('book_img'))
        console.log(formData.get('description'))
        console.log(formData.get('user_id'))
        console.log(formData.get('title'))
        console.log(formData.get('author'))
        BookService.createBook(formData).then(function(res){
          console.log(res)
          // setReRender({render: true})
          // render data after create book
          BookService.getUserBook({id:user.id}).then(function(res){
            setBook(res.data)
                console.log(res)
                // setReRender({render: true})
                setBookData({
                  myImage:"",
                  description:"",
                  user_id:user.id,
                  author:"",
                  title:"",
                })
                
                }) 
          }) 
        console.log(bookData)
        }
        const handelDel = (id)=>{
          console.log({id})
          const fd = new FormData()
          fd.append('id', id)
          BookService.deleteBook(fd).then(function(res){
            // setBook(res.data)
                console.log(res.data)
                BookService.getUserBook({id:user.id}).then(function(res){
                  setBook(res.data)
                      console.log(res)
                      // setReRender({render: true})
                      
                }) 
          })
        }
  return (
    <div>
      <Header />

      <div style={{display:'flex'}}>
          <div className="left">
            <div className='info'>
              <h3><FaUserAlt style={{fontSize: '20px'}} /> {user.name}</h3>
              <h3><GrMail style={{fontSize: '20px'}} /> {user.email}</h3>
              <h3><span style={{marginTop: '20px'}}><FaBookOpen style={{fontSize: '20px'}} /> </span>{book.length}</h3>
            </div>
            <div className='books_countaner2'>
              {book.map(e=>(
                <Card key={e.id} style={{ width: '100%' }}>
                <Card.Img variant="top" style={{width:'35%', marginLeft: '100px'}} src={"http://localhost/library/backend/upload/"+e.book_img} />
                <div style={{padding: '20px', paddingBottom: '10px'}}>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                      {e.description}
                    </Card.Text>
                    <div style={{display: 'flex', justifyContent:'space-around'}}>
                      <Link style={{textDecoration: 'none', padding:'10px', width: '50px', background: 'blue', color:'#fff', borderRadius:'5px', textAlign:'center'}} to={"/Edit/" + e.id} variant="primary">Edit</Link>
                      <button  style={{border:'none', padding:'10px', width: '50px', background: 'red', color:'#fff', borderRadius:'5px'}} onClick={()=> handelDel(e.id)} variant="primary">delete</button>
                    </div>
                  </Card.Body>
                </div>
              </Card>
              ))}
            </div>
          </div>
          <form className='right' onSubmit={handelsubmit} >
            <h1>create book</h1>
            <div>
              <input
                  className='bookInput'
                  type="text"
                  onChange={handleChange}
                  name="title"
                  placeholder="title"
              />
            </div>
            <div>
            <input
                className='bookInput'

      
    <div className="profile">
    <div className='userinfo'>
      <h3>user name: {user.name}</h3>
      <h3>user email: {user.email}</h3>
    </div>
    <form onSubmit={handelsubmit} >
        <h1>create book</h1>
        <div>
            <input
                type="text"
                onChange={handleChange}
                name="title"
                placeholder="title"
            />
            <input

                type="text"
                onChange={handleChange}
                name="author"
                placeholder="author"
            />

            </div>
            <div>
            <input
                className='bookInput'

            <input

                type="text"
                onChange={handleChange}
                name="description"
                placeholder="description"
            />

            </div>
            <div>
                Change Image
                <input type="file" name="myImage"  onChange={handleImage}/>
            </div>
            <button type="submit" className='bookBtn' >create</button>
        </form>
      </div>

    </div>
  )
}

export default Test