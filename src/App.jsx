import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Chat from './Components/Chat/Chat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
