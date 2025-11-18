import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import cclogo from './assets/cc_logo.webp'
import LanguagePage from './pages/LanguagePage'

function App () {
  return (
    <>
      <BrowserRouter>
        <h1 className='text-2xl flex font-bold bg-linear-to-r from-blue-500 to-purple-500 text-center p-5 rounded-2xl mt-5 mb-5 md:mx-100 mx-auto justify-center items-center gap-2'>
          <span>
            <img src={cclogo} alt='' className='md:w-50 w-25 rounded-full' />
          </span>
          Social Media Accounts
        </h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:lang' element={<LanguagePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
