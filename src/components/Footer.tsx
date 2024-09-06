import { Github, Telegram, Linkedin, Facebook, Twitter, Instagram } from './'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      id='contact'
      className='flex md:flex-row md: flex-col justify-between items-center gap-12 mx-auto mb-20 px-4 md:px-12 max-w-7xl'
    >
      <Link
        to={'/contact'}
        className='border-pink-600 p-2 border border-t-0 border-r-0 border-b-0 border-l-2 border-double font-bold text-pink-600'
      >
        hungbui7690@gmail.com <span>📨</span>
      </Link>
      <div className='flex gap-4 icons'>
        <a href='https://github.com/hungbui7690'>
          <img className='w-7 h-7' src={Github} alt='github icon' />
        </a>
        <a href='https://t.me/hungthanhbui'>
          <img className='w-7 h-7' src={Telegram} alt='telegram icon' />
        </a>
        <a href='https://www.linkedin.com/in/hung-bui-10a174264/'>
          <img className='w-7 h-7' src={Linkedin} alt='linkedin icon' />
        </a>
        <a href='https://x.com/hungbui7690'>
          <img className='w-7 h-7' src={Twitter} alt='twitter icon' />
        </a>
        <img className='w-7 h-7' src={Facebook} alt='facebook icon' />
        <img className='w-7 h-7' src={Instagram} alt='instagram icon' />
      </div>
      <div className='flex gap-4 p-2'>
        <p>
          Made with 💜 <span className='font-bold'>#2024</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
