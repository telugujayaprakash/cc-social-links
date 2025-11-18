import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Telugu from './pages/Telugu'
import All from './pages/All'
import Hindi from './pages/Hindi'
import Kannada from './pages/Kannada'
import Malayalam from './pages/Malayalam'
import Bengali from './pages/Bengali'
import Tamil from './pages/Tamil'
import Bhojpuri from './pages/Bhojpuri'
import cclogo from './assets/cc_logo.webp'

function App () {
  return (
    <>
      <BrowserRouter>
        <h1 className='text-2xl flex font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-center p-5 rounded-2xl mt-5 mb-5 md:mx-100 mx-auto justify-center items-center'>
          <span>
            <img src={cclogo} alt='' className='md:w-50 w-25 rounded-full' />
          </span>
          Social Media Accounts
        </h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all' element={<All />} />
          <Route path='/telugu' element={<Telugu />} />
          <Route path='/hindi' element={<Hindi />} />
          <Route path='/kannada' element={<Kannada />} />
          <Route path='/tamil' element={<Tamil />} />
          <Route path='/malayalam' element={<Malayalam />} />
          <Route path='/bengali' element={<Bengali />} />
          <Route path='/bhojpuri' element={<Bhojpuri />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
