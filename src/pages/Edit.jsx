import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookService from '../apis/BookService';

function Edit() {
    const user = useSelector(state=>state.isLoggedIn)
    const param = useParams()
    const [book, setBook] = useState([])
    // console.log(user)
    const [bookData, setBookData] = useState({
        myImage:"",
        description:"",
        user_id:1,
        author:"",
        title:"",
      });
      useEffect(()=>{
        BookService.getBookById(param.id).then(function(res){
        setBookData(res.data[0])
            console.log(res.data)
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
        formData.append('id', param.id)
        
        console.log(formData.get('book_img'))
        console.log(formData.get('description'))
        console.log(formData.get('user_id'))
        console.log(formData.get('title'))
        console.log(formData.get('author'))
        console.log(formData.get('id'))
        BookService.updateBook(formData).then(function(res){
          console.log(res)
          // setReRender({render: true})
          
          }) 
        console.log(bookData)
        }
  return (
    <div>
    <form onSubmit={handelsubmit} >
        <h1>Update book</h1>
        <div>
                <input
                    type="text"
                    onChange={handleChange}
                    name="title"
                    value={bookData.title}
                    placeholder="title"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="author"
                    defaultValue={bookData.author}
                    placeholder="author"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    name="description"
                    value={bookData.description}
                    placeholder="description"
                />
        </div>
        <div>
            Change Image
            <input type="file" name="myImage"  onChange={handleImage}/>
        </div>
        <button type="submit">Update</button>
    </form>
    </div>
  )
}

export default Edit