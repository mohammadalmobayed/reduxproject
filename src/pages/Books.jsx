import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import BookService from '../apis/BookService'
import Header from '../componet/Header'


export default function Books() {
    const [book, setBook] = useState([])


    useEffect(()=>{
        BookService.getBook().then(function(res){
        setBook(res.data)
            console.log(res)
            // setReRender({render: true})
            
            }) 
    },[])
  return (
    <div className='App'>
      <Header/>

    {book.map(e=>(
        <Card key={e.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100px'}} src={"http://localhost/library/backend/upload/"+e.book_img} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))}
    
    
    
    
    
    
    </div>
  )
}
