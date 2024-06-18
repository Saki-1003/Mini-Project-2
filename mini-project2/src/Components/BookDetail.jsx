import { DataContext } from "../Context/DataProvider"
import { useContext } from "react"
import { useParams } from "react-router-dom"


export default function BookDetail() {

  const {id} = useParams()
  const {bookData, handleSetBookData} = useContext(DataContext)

  const bookDetail = bookData.find(book=>book.id==id)

  return(
    <div className='bookDetail_container'>

    <h2>{bookDetail.title} <span>/ by {bookDetail.author}</span></h2>
    <img src={bookDetail.bookImage} />
    <p>Category: {bookDetail.category}</p>
    <p>Condition: {bookDetail.condition}</p>
    <p>Type: <strong>{bookDetail.tradeType}</strong></p>
    <p>Price: NZD {bookDetail.price}</p>
    <p>Description: <br />{bookDetail.synopsis}</p>


    </div>

  )
}