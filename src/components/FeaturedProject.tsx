import FeaturedProjectTag from './FeaturedProjectTag'

interface Props {
  description: string
  github: string
  image: string
  tags: string[]
  title: string
  url: string
  _id: string
  featured: boolean
}

const FeaturedProject = ({
  description,
  github,
  image,
  tags,
  title,
  featured,
  url,
  _id,
}: Props) => {
  return (
    <div
      className='z-0 flex flex-col gap-y-2 rounded-t-md cursor-pointer overflow-hidden card glass group'
      key={_id}
    >
      <img
        className={`group-hover:scale-105 ${
          featured && 'relative'
        } rounded-t-md w-full h-60 transform transition duration-300 object-cover`}
        src={image}
        alt='project 4'
      />
      {featured && (
        <span className='top-1 right-1 absolute p-2 rounded-full text-2xl'>
          🍂
        </span>
      )}
      <div className='description'>
        <h5 className='flex justify-between mb-1 px-4 font-bold'>{title}</h5>
        <p className='mt-0 px-4'>{description}</p>
      </div>
      <div className='flex flex-wrap gap-4 px-4 pt-4'>
        {tags.map((tag) => {
          return <FeaturedProjectTag tagID={tag} key={tag} />
        })}
      </div>
      <div className='flex justify-between p-4'>
        <a
          href={url}
          target='_blank'
          className='border-slate-600 px-4 py-2 border'
        >
          <button>Demo</button>
        </a>
        <a
          href={github}
          target='_blank'
          className='border-slate-600 px-4 py-2 border'
        >
          <button>Github</button>
        </a>
      </div>
    </div>
  )
}

export default FeaturedProject
