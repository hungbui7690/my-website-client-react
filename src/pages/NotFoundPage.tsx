import NotFoundImage from '../images/404.svg'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className='mx-auto w-[80vw] h-[80vh] text-center'>
      <img src={NotFoundImage} alt='404 image' className='w-full h-full' />
      <Link to='/'>
        <button className='bg-[#00BFA6] mx-auto mt-10 px-2 sm:px-8 py-2 sm:py-4 rounded-md text-center text-white text-xl sm:text-2xl'>
          Back to Homepage
        </button>
      </Link>
    </section>
  )
}

export default NotFoundPage
