import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import DisplayBooks from './Components/DisplayBooks'
import PostBook from './Components/PostBook'
import BookDetail from './Components/BookDetail'
import ProtectedRoute from './Components/ProtectedRoute'


export default function AppRoutes() {

  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/books' element={
        <ProtectedRoute>
           <DisplayBooks />
        </ProtectedRoute>}
      > 
      </Route>
      <Route path='/books/:id' element={<BookDetail></BookDetail>}></Route>
      <Route path='/sell' element={
        <ProtectedRoute>
          <PostBook />
        </ProtectedRoute>}
      >
      </Route>

    </Routes>
  )
} 