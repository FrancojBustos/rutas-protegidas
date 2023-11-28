import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserAuth from './components/auth/UserAuth'
import PageNotFound from './components/PageNotFound'
import '../public/index.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={<UserAuth/>} canActivate={true}>
      <Route path="/about" element={<About/>}/>
      </Route>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
