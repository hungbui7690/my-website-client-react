import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, IRootState } from '../store'
import { logout } from '../features/auth/authThunk'
import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../App'

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, setIsOpen } = useGlobalContext()
  const { username } = useSelector((state: IRootState) => state.auth)
  const hamburgerMenu = useRef<HTMLDivElement>(null)
  const mobileLinksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !hamburgerMenu?.current?.contains(e.target as Node) &&
        !mobileLinksRef?.current?.contains(e.target as Node)
      )
        setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className='top-0 z-10 sticky h-16 nav'>
      <div className='relative flex justify-between items-center mx-auto px-4 md:px-12 max-w-7xl h-16 md: font-bold glass nav-center'>
        {/* Logo */}
        <Link to='/' className='cursor-pointer'>
          <span className='text-4xl'>🍁</span>
        </Link>

        {/* Hidden Links */}
        {username && (
          <ul className='sm:flex gap-x-4 hidden px-4 py-2'>
            <Link to='/add-tag'>
              <li className='flex justify-center items-center border-2 border-emerald-500 px-4 py-2 rounded-md text-emerald-500 hover:text-emerald-600 cursor-pointer'>
                Add Tag
              </li>
            </Link>

            <Link to='/add-project'>
              <li className='flex justify-center items-center border-2 border-emerald-500 px-4 py-2 rounded-md text-emerald-500 hover:text-emerald-600 cursor-pointer'>
                Add Project
              </li>
            </Link>
          </ul>
        )}

        {/* Links */}
        <ul className='sm:flex gap-x-4 hidden bg-slate-800 px-4 py-2 rounded-full'>
          <Link to='/projects'>
            <li className='hover:text-emerald-600 cursor-pointer'>Projects</li>
          </Link>
          <Link to='/contact'>
            <li className='hover:text-emerald-600 cursor-pointer'>Contact</li>
          </Link>
          {!username ? (
            <Link to='/login'>
              <li className='hover:text-emerald-600 cursor-pointer'>Login</li>
            </Link>
          ) : (
            <button onClick={handleLogout}>
              <li className='hover:text-emerald-600 cursor-pointer'>Logout</li>
            </button>
          )}
        </ul>

        {/* Mobile Links */}
        {isOpen && (
          <ul
            className='top-[4rem] right-1 absolute flex-col sm:hidden bg-slate-950 px-8 py-4 rounded-lg transition duration-1000 ease-in-out glass mobile-links'
            ref={mobileLinksRef}
          >
            <Link to='/projects'>
              <li className='mb-4 hover:text-emerald-600 cursor-pointer'>
                Projects
              </li>
            </Link>
            <Link to='/contact'>
              <li className='mb-4 hover:text-emerald-600 cursor-pointer'>
                Contact
              </li>
            </Link>
            {username && (
              <>
                <Link to='/add-tag'>
                  <li className='mb-4 text-emerald-500 hover:text-emerald-600 cursor-pointer'>
                    Add Tag
                  </li>
                </Link>
                <Link to='/add-project'>
                  <li className='mb-4 text-center text-emerald-500 hover:text-emerald-600 cursor-pointer'>
                    Add Project
                  </li>
                </Link>
              </>
            )}
            {!username ? (
              <Link to='/login'>
                <li className='hover:text-emerald-600 cursor-pointer'>Login</li>
              </Link>
            ) : (
              <button onClick={handleLogout}>
                <li className='hover:text-emerald-600 cursor-pointer'>
                  Logout
                </li>
              </button>
            )}
          </ul>
        )}

        {/* Hamburger Menu */}
        <div
          className='sm:hidden cursor-pointer hover:scale-125 transform'
          ref={hamburgerMenu}
        >
          <span
            className='text-2xl hamburger'
            onClick={() => setIsOpen(!isOpen)}
          >
            🌳
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
