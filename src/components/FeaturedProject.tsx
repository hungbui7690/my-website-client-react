import FeaturedProjectTag from './FeaturedProjectTag'

const FeaturedProject = () => {
  return (
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
      <div className='flex flex-wrap px-4'>
        <FeaturedProjectTag tagName='HTML' />
        {/* <FeaturedProjectTag tagName='React' />
              <FeaturedProjectTag tagName='NodeJS' /> */}
      </div>
    </div>
  )
}

export default FeaturedProject
