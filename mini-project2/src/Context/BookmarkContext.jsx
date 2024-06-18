import { createContext } from "react";
import { useState } from "react";

export const BookmarkContext = createContext({})

export function BookmarkContextProvider(props) {

  const [checked, setChecked] = useState([]);

  const handleChange = (book) => {
    setChecked([...checked, book]);
  };
  const deleteBook = (id) => {
    setChecked(checked.filter((book) => book.id!==id))
  }
  console.log(checked)
  
  return (
    <BookmarkContext.Provider value={{checked, handleChange, deleteBook}}>
      {props.children}
    </BookmarkContext.Provider>
  )
}