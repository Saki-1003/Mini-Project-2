import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { BookmarkContext } from '../Context/BookmarkContext';
import { useContext } from 'react';

export default function BookCard({item}) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const {checked, handleChange, deleteBook} = useContext(BookmarkContext)

  const handleBookmarkChange = (event) => {
   if(event.target.checked) {
    handleChange(item)
   } else {
    deleteBook(item.id)
   }
  };

  const isChecked = !! checked.find((book) => book.id==item.id)



  return(
    <Card sx={{flexBasis: '70%', marginTop: 2, marginLeft: 2,}}>
    <Link to={`/books/${item.id}`}>
    <CardMedia sx={{ width: '20%', height: 100, float: 'left', paddingTop: 14, marginTop: 2  }} image={item.bookImage}></CardMedia>
    <CardContent>
      <Typography key={item.title} gutterBottom variant="h5">{item.title}</Typography>
      <Typography key={item.author} variant="body1" color="text.primary">{item.author}</Typography>
      <Typography key={`s-${item.title}`} variant="body2" color="text.secondary">{item.synopsis}</Typography>
    </CardContent>
    </Link>
    <CardActions>
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon sx={{color:'#ffc107'}} />}
        checked={isChecked}
        onChange={handleBookmarkChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      
      <Button size="small">
        <EmailIcon sx={{color:'#2979ff'}}></EmailIcon>
         Contact seller
      </Button>
    </CardActions>
  </Card>
 
  )
}