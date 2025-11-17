import React from 'react'
import { Link } from 'react-router-dom'
import telugu from './assets/telugu.png'
import tamil from './assets/tamil.png'
import hindi from './assets/hindi.png'
import malayalam from './assets/malayalam.png'
import kannada from './assets/kannada.png'
import bhojpuri from './assets/bojpuri.png'
import bengali from './assets/bengali.png'

function Home () {
  const cat = [
    {
      lang: 'telugu',
      img: telugu
    },
    {
      lang: 'tamil',
      img: tamil
    },
    {
      lang: 'hindi',
      img: hindi
    },
    {
      lang: 'malayalam',
      img: malayalam
    },
    {
      lang: 'kannada',
      img: kannada
    },
    {
      lang: 'bhojpuri',
      img: bhojpuri
    },
    {
      lang: 'bengali',
      img: bengali
    }
  ]
  return (
    <>
      <div className='md:grid-cols-3 grid grid-cols-1 gap-5 md:ml-30 ml-5'>
        {cat.map((category, index) => {
          return (
            <Link to={`/${category.lang}`} key={index}>
              <div className='bg-red-400 rounded-2xl shadow-red-800 w-fit hover:scale-105 transition transform duration-200 shadow-lg'>
                <div className='group overflow-hidden relative  flex justify-center items-center h-56 w-80 origin-bottom-right rounded-2xl outline -outline-offset-8'>
                  <div>
                    <img src={category.img} alt={category.lang} />
                    <div className='z-10 flex flex-col items-center gap-2'>
                      <span className='text-slate-400 text-6xl font-bold'>
                        Telugu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Home
