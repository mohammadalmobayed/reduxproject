import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookService from '../apis/BookService';
import Header from '../componet/Header';

function Test() {
    const user = useSelector(state=>state.isLoggedIn)
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
      <h3>user name: {user.name}</h3>
      <h3>user email: {user.email}</h3>
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
        <button type="submit">create</button>
    </form>
    <div>
    {book.map(e=>(
        <Card key={e.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100px'}} src={"http://localhost/library/backend/upload/"+e.book_img} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Link to={"/Edit/" + e.id} variant="primary">Edit</Link>
        <button onClick={()=> handelDel(e.id)} variant="primary">delete</button>
      </Card.Body>
    </Card>
    ))}
    
    
    </div>
    </div>
  )
}

export default Test