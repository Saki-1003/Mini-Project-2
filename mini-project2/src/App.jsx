import './App.css'
import AppRoutes from './AppRoutes'
import ButtonAppBar from './Components/NavBar'
import { UserProvider } from './Context/UserProvider'
import { DataProvider } from './Context/DataProvider'
import { BookmarkContextProvider } from './Context/BookmarkContext'

function App() {


  return (
    <>

    <UserProvider>
      <DataProvider>
        <BookmarkContextProvider>
          <ButtonAppBar></ButtonAppBar>
          <AppRoutes></AppRoutes>
        </BookmarkContextProvider>
      </DataProvider>
    </UserProvider>

   
    <footer>
      <small>&copy;2024 Second BOOK. All Rights Researved.</small>
    </footer>
    </>
  )
}

export default App
