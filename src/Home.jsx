import { Link } from 'react-router-dom'
import telugu from './assets/telugu.webp'
import tamil from './assets/tamil.webp'
import hindi from './assets/hindi.webp'
import malayalam from './assets/malayalam.webp'
import kannada from './assets/kannada.webp'
import bhojpuri from './assets/bojpuri.webp'
import bengali from './assets/bengali.webp'
import cclogo1 from './assets/cc_logo.webp'

function Home () {
  const cat = [
    {
      lang: 'all',
      img: cclogo1
    },
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
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 ml-5 md:ml-28'>
        {cat.map((category, index) => (
          <Link to={`/${category.lang}`} key={index}>
            <div className='bg-red-400 rounded-2xl shadow-red-800 hover:scale-105 transition duration-200 shadow-lg w-80'>
              <div className='relative overflow-hidden h-56 w-80 rounded-2xl flex justify-center items-center'>
                <img
                  src={category.img}
                  alt={category.lang}
                  className='object-cover h-full w-full'
                />

                {/* Overlay text */}
                <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition'>
                  <span className='text-white text-4xl font-bold'>
                    {category.lang}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
