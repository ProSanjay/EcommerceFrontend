import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter as Router , Route, Routes } from 'react-router-dom'
import HomeScreen from "./components/screen/HomeScreen"
import LogIn from './components/screen/LogIn'
import SignUp from './components/screen/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element = {<HomeScreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/logIn' element = {<LogIn/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/signUp' element = {<SignUp/>}></Route>
        </Routes>
      </Router>
    


      <Footer/>
    </>
  )
}

export default App
