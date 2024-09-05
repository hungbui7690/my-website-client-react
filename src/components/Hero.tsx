import Cartoon from '../images/cartoon.png'

const Hero = () => {
  return (
    <>
      <section className='flex justify-between mx-auto px-4 md:px-12 max-w-7xl hero'>
        <div className='flex flex-col justify-center sm:basis-full basis-3/4 description'>
          <p className='font-bold text-violet-700 uppercase'>Hello,</p>
          <h1 className='font-bold'>I'm Hung Bui</h1>
          <p>
            I'm a<span className='text-green-500'>self-taught</span> web
            developer based in Colorado, US.
          </p>
          <p>
            With over <span className='text-pink-600 highlight'>10 years</span>{' '}
            of experience in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications. I take into consideration the
            <span className='text-violet-500 highlight'>user experience</span>
            while writing
            <span className='text-orange-500 highlight'>reusable</span> and
            <span className='text-yellow-400 highlight'>efficient</span> code. I
            passionately combine good design, technology, and innovation in all
            my projects, which I like to accompany from the first idea to
            release.
          </p>
          <button className='inline-block bg-violet-900 mt-8 p-2 rounded-md w-32 text-center text-white'>
            Resume 🧾
          </button>
        </div>
        <div className='sm:flex flex-col justify-center hidden img-container'>
          <img className='w-96 object-cover' src={Cartoon} alt='cartoon' />
        </div>
      </section>

      <div
        id='skills'
        className='bg-gradient-to-r from-10% from-slate-950 via-pink-600 to-90% to-slate-950 mt-10 mb-10 w-full h-[1px]'
      ></div>
    </>
  )
}

export default Hero
