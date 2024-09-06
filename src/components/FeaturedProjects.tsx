import FeaturedProject from './FeaturedProject'

const FeaturedProjects = () => {
  return (
    <>
      <div className='mx-auto mb-24 px-4 md:px-12 max-w-7xl'>
        <h2 className='font-bold text-center'>Featured Projects</h2>
        <section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3 projects'>
          <FeaturedProject />
        </section>
      </div>
      <div className='bg-gradient-to-r from-10% from-slate-950 via-orange-600 to-90% to-slate-950 mt-20 mb-20 w-full h-[1px]'></div>
    </>
  )
}

export default FeaturedProjects
