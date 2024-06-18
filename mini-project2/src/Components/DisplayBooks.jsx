import BookCard from './BookCard';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

export default function DisplayBooks() {

  const {bookData, handleBookData} = useContext(DataContext)

  return(

    <div className='displaybook_container'>
      <div className='bookList_container'>
      {bookData && bookData.map(item => (
       <BookCard item={item}></BookCard>
      ))}
      </div>
  
      <section className='bookmark'>
        <h3>Bookmark</h3>

      </section>
    </div>


  )
}
    

  