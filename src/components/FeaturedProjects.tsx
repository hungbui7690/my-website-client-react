import { useQuery } from '@tanstack/react-query'
import FeaturedProject from './FeaturedProject'
import { axiosInstance } from '../utils/axios'
import Loading from './Loading'

type PostType = {
  description: string
  github: string
  image: string
  tags: string[]
  title: string
  url: string
  _id: string
}

const FeaturedProjects = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: async () => {
      const res = await axiosInstance.get('/post/featured')
      return res.data
    },
  })

  // console.log(data)

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  return (
    <>
      <div className='mx-auto mb-24 px-4 md:px-12 max-w-7xl'>
        <h2 className='font-bold text-center'>Featured Projects</h2>
        <section className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3 projects'>
          {data.posts.map((post: PostType) => (
            <FeaturedProject {...post} key={post._id} />
          ))}
        </section>
      </div>
      <div className='bg-gradient-to-r from-10% from-slate-950 via-orange-600 to-90% to-slate-950 mt-20 mb-20 w-full h-[1px]'></div>
    </>
  )
}

export default FeaturedProjects
