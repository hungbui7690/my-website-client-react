import { Github, Telegram, Linkedin, Facebook, Twitter, Instagram } from './'

const Footer = () => {
  return (
    <footer
      id='contact'
      className='flex md:flex-row md: flex-col justify-between items-center gap-12 mx-auto mb-20 px-4 md:px-12 max-w-7xl'
    >
      <p className='border-pink-600 p-2 border border-t-0 border-r-0 border-b-0 border-l-2 border-double font-bold text-pink-600'>
        hungbui7690@gmail.com <span>📨</span>
      </p>
      <div className='flex gap-4 icons'>
        <img className='w-7 h-7' src={Github} alt='github icon' />
        <img className='w-7 h-7' src={Telegram} alt='telegram icon' />
        <img className='w-7 h-7' src={Linkedin} alt='linkedin icon' />
        <img className='w-7 h-7' src={Facebook} alt='facebook icon' />
        <img className='w-7 h-7' src={Twitter} alt='twitter icon' />
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
