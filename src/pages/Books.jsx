import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import BookService from '../apis/BookService'
import Header from '../componet/Header'
import Search from '../componet/Search'
import { authActions } from '../store/authSlice'
// import SingleBook from '../componet/SingleBook'




export default function Books() {
  const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const [book, setBook] = useState([])
    const [sr,setSr]=useState('')

    useEffect(()=>{
      if(user){
        dispatch(authActions.login())
      }
        BookService.getBook().then(function(res){
        setBook(res.data)
            console.log(res)
            // setReRender({render: true})
            
          }) 
    },[])
console.log(sr)
  return (

    <div className='App'>
     <Header/>
     <Search  sr={sr} setSr={setSr} />
     {/* <SingleBook /> */}
   
<div className='books_countaner'>
      {book.filter(b=>b.title.toLowerCase().includes(sr)).map(e=>(
        <Card key={e.id} style={{ width: '100%' }}>
        <Card.Img variant="top" style={{width:'35%' }} src={"http://localhost/library/backend/upload/"+e.book_img} />
        <Card.Body>
          <Card.Title>{e.title}</Card.Title>
          <Card.Text>
            {e.description}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      ))}
    </div>
    
    
    
    
    
    
    </div>
  )
}
