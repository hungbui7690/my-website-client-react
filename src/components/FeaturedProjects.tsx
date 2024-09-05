const FeaturedProjects = () => {
  return (
    <>
      <div className='mx-auto mb-24 px-4 md:px-12 max-w-7xl'>
        <h2 className='font-bold text-center'>Featured Projects</h2>
        <section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3 projects'>
          <div className='z-0 flex flex-col gap-y-4 rounded-t-md cursor-pointer overflow-hidden card glass group'>
            <img
              className='group-hover:scale-105 rounded-t-md w-full h-60 transform transition duration-300 object-cover'
              src='./images/projects/project-4.jpg'
              alt='project 4'
            />
            <div className='description'>
              <h5 className='px-4 font-bold'>The Next Cartoon</h5>
              <p className='px-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-4 px-4 pb-12 tags'>
              <span className='border-2 px-4 p-1 border-rose-500 rounded-full font-semibold text-rose-500'>
                react
              </span>
              <span className='border-2 border-emerald-500 px-4 p-1 rounded-full font-semibold text-emerald-500'>
                mongodb
              </span>
              <span className='border-2 border-yellow-500 px-4 p-1 rounded-full font-semibold text-yellow-500'>
                react
              </span>
            </div>
          </div>

          <div className='z-0 flex flex-col gap-y-4 rounded-t-md cursor-pointer overflow-hidden card glass group'>
            <img
              className='group-hover:scale-105 rounded-t-md w-full h-60 transform transition duration-300 object-cover'
              src='./images/projects/project-5.jpg'
              alt='project 5'
            />
            <div className='description'>
              <h5 className='px-4 font-bold'>Please Tell Me Why</h5>
              <p className='px-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-4 px-4 pb-12 tags'>
              <span className='border-2 px-4 p-1 border-rose-500 rounded-full font-semibold text-rose-500'>
                react
              </span>
              <span className='border-2 border-emerald-500 px-4 p-1 rounded-full font-semibold text-emerald-500'>
                mongodb
              </span>
              <span className='border-2 border-yellow-500 px-4 p-1 rounded-full font-semibold text-yellow-500'>
                react
              </span>
            </div>
          </div>

          <div className='z-0 flex flex-col gap-y-4 rounded-t-md cursor-pointer overflow-hidden card glass group'>
            <img
              className='group-hover:scale-105 rounded-t-md w-full h-60 transform transition duration-300 object-cover'
              src='./images/projects/project-6.jpg'
              alt='project 6'
            />
            <div className='description'>
              <h5 className='px-4 font-bold'>The Black Frontier</h5>
              <p className='px-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-4 px-4 pb-12 tags'>
              <span className='border-2 px-4 p-1 border-rose-500 rounded-full font-semibold text-rose-500'>
                react
              </span>
              <span className='border-2 border-emerald-500 px-4 p-1 rounded-full font-semibold text-emerald-500'>
                mongodb
              </span>
              <span className='border-2 border-yellow-500 px-4 p-1 rounded-full font-semibold text-yellow-500'>
                react
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className='bg-gradient-to-r from-10% from-slate-950 via-orange-600 to-90% to-slate-950 mt-20 mb-20 w-full h-[1px]'></div>
    </>
  )
}

export default FeaturedProjects
