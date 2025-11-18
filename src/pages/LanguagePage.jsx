import { useParams, Link } from 'react-router-dom'
import Linkspage from './LinksPage'

function LanguagePage () {
  const { lang } = useParams()
  const links = Linkspage[lang]

  if (!links) {
    return (
      <div className='text-center mt-10'>
        <h1 className='text-2xl font-bold'>Language not found</h1>
        <Link to='/'>
          <button className='bg-red-500 p-2 rounded-xl mt-4 text-white'>
            Go Back
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='flex flex-col items-center w-full mt-4'>
        {links.map((item, key) => (
          <a
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            key={key}
            className='w-full flex justify-center'
          >
            <button
              className='w-full md:w-1/2 flex justify-center gap-3 p-3 mt-4 text-white 
              bg-linear-to-r from-blue-500 to-purple-500 rounded-lg 
              hover:scale-105 transition duration-300 shadow-lg'
            >
              <img src={item.logo} alt={item.name} className='w-6 h-6' />
              {item.name}
            </button>
          </a>
        ))}
      </div>

      <Link to='/'>
        <button className='bg-red-500 p-2 rounded-2xl w-full md:w-auto flex justify-center mt-6 text-white'>
          ⬅️ Back
        </button>
      </Link>
    </div>
  )
}

export default LanguagePage
