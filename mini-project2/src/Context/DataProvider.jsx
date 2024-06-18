import { createContext } from "react";
import { useState } from "react";
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react'

export const DataContext = createContext({})


export function DataProvider(props) {

  const [bookData, setBookData] = useState(null)

  const data = useFetch('http://localhost:3000/books')
  useEffect(()=>{
    if(data) {
      setBookData(data)
    }
  },[data])

  function handleSetBookData (data){
    const bookValue = data && Object.values(data)
    setBookData(bookValue)
  }


  return(
    <DataContext.Provider value={{bookData, handleSetBookData}}>
      {props.children}
    </DataContext.Provider>
  )
}
