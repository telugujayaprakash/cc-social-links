import { Link } from 'react-router-dom'
import insta from '../assets/insta-logo.webp'
import fblogo from '../assets/fb-logo.webp'

function Hindi () {
  const social = [
    {
      name: 'Instagram',
      logo: insta,
      link: 'https://www.instagram.com/chitramcinemahindi/?hl=en'
    },
    {
      name: 'facebook',
      logo: fblogo,
      link: 'https://www.facebook.com/profile.php?id=61583136652222'
    }
  ]
  return (
    <>
      <div className='w-screen flex flex-col items-center'>
        <div className='flex flex-col items-center w-full mt-4'>
          {social.map((item, key) => (
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              key={key}
              className='w-full flex justify-center'
            >
              <button
                className='w-full md:w-1/2 flex justify-center gap-3 p-3 mt-4 text-white bg-linear-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='button'
              >
                <img src={item.logo} alt='' className='w-6 h-6' />
                {item.name}
              </button>
            </a>
          ))}
        </div>
        <Link to={'/'}>
          <button className='bg-red-500 p-2 rounded-2xl w-full md:w-auto flex justify-center'>
            ⬅️ back
          </button>
        </Link>
      </div>
    </>
  )
}

export default Hindi
