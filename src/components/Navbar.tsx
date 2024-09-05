import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='top-0 z-10 sticky h-16 nav'>
      <div className='relative flex justify-between items-center mx-auto px-4 md:px-12 max-w-7xl h-16 md: font-bold glass nav-center'>
        {/* Logo */}
        <span className='text-4xl'>
          <Link to='/' className='cursor-pointer'>
            🍁
          </Link>
        </span>

        {/* Links */}
        <ul className='sm:flex gap-x-4 hidden bg-slate-800 px-4 py-2 rounded-full'>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <Link to='#skills'>Skills</Link>
          </li>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Links */}
        <ul className='top-[4rem] right-1 absolute flex-col gap-4 hidden bg-slate-950 px-4 py-2 rounded-lg transition duration-1000 ease-in-out glass mobile-links'>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='hover:text-emerald-600 cursor-pointer'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className='sm:hidden cursor-pointer hover:scale-125 transform'>
          <span className='text-2xl hamburger'>🌳</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
