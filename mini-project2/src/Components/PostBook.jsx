import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {BasicSelect} from "./MUISelectBox";
import Button from '@mui/material/Button';

const emptyBook = {
  title: "", 
  author: "",
  price: "",
  category: "",
  condition: "", 
  tradeType: "",
  synopsis: "",
  sellerNote: "",
  bookImage: "",
}

export default function PostBook() {


  const condition = ['Bad', 'Fair', 'Good', 'Very good', 'Excellent']
  const tradeType = ['Sell', 'Trade']
  const category = ['Biography', 'Business/economics', 'Children\'s', 'Comic book', 'Cookbook', 'Dictionary', 'Fairytale', 'Fantasy', 'History', 'Novel', 'Philosophy', 'Science','Travel', 'Other' ]
  const [book, setBook] = useState(emptyBook)


  function handleSetBook(e) {
    setBook((bookObj)=> ({...bookObj, [e.target.name]: e.target.value}))
  }
  
  async function handlePostBook() {

    const response = await fetch('http://localhost:3000/books',{
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })

    setBook(emptyBook)
    
   }
    

  return(
      
    <div className='post_book'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Post Book</h2>
      <div className='post_book_inner'>
        <TextField
          value={book.title}
          name="title"
          label="Book title"
          onChange={handleSetBook}
          multiline
          maxRows={4}
        />
        <TextField
          value={book.author}
          name="author"
          label="Author"
          onChange={handleSetBook}
          multiline
        />
        <BasicSelect 
          value={book.category}
          name='category' 
          option={category}
          onChange={handleSetBook}
        /><br />

        <TextField
          value={book.price}
          name="price"
          label="Price"
          onChange={handleSetBook}
          multiline
          maxRows={4}
        />
        
        <BasicSelect
          value={book.condition} 
          name='condition' 
          option={condition}
          onChange={handleSetBook}
        />

        <BasicSelect 
          value={book.tradeType}
          name='tradeType' 
          option={tradeType}
          onChange={handleSetBook}
        /><br />
  
        <TextField
          value={book.synopsis}
          name="synopsis"
          label="Synopsis"
          onChange={handleSetBook}
          multiline
          rows={4}
        />
        <TextField
          value={book.sellerNote}
          name="sellerNote"
          label="Note"
          onChange={handleSetBook}
          multiline
          rows={4}
          columns={6}
        /><br />
        <TextField
          value={book.bookImage}
          name="bookImage"
          label="Upload image(URL)"
          onChange={handleSetBook}
          multiline
          maxRows={4}
        /><br />
        <Button type='button' onClick={handlePostBook} variant="contained">Post</Button>
      </div>
    </Box>
    </div>
  )
}