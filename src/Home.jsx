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
    { lang: 'official', img: cclogo1 },
    { lang: 'telugu', img: telugu },
    { lang: 'tamil', img: tamil },
    { lang: 'hindi', img: hindi },
    { lang: 'malayalam', img: malayalam },
    { lang: 'kannada', img: kannada },
    { lang: 'bhojpuri', img: bhojpuri },
    { lang: 'bengali', img: bengali }
  ]

  return (
    <div className='px-4 md:px-20 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {cat.map((category, index) => (
        <Link to={`/${category.lang}`} key={index}>
          <div
            className='bg-red-400 rounded-2xl shadow-red-800 hover:scale-[1.04]
                          transition-transform duration-300 shadow-lg group'
          >
            <div className='relative overflow-hidden h-40 sm:h-48 md:h-56 rounded-2xl'>
              <img
                loading='lazy'
                src={category.img}
                alt={category.lang}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home
