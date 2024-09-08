import { useEffect } from 'react'
import { useGlobalContext } from '../App'
import FeaturedProject from '../components/FeaturedProject'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../utils/axios'
import Loading from '../components/Loading'

interface PostType {
  description: string
  github: string
  image: string
  tags: string[]
  title: string
  url: string
  _id: string
  featured: boolean
}

const Projects = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isPending, isError, data } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: async () => {
      const res = await axiosInstance.get('/post')
      return res.data
    },
  })

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  return (
    <>
      <h2 className='mb-8 font-bold text-center'>Projects</h2>
      <section className='justify-center gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto px-4 md:px-12 py-8 max-w-7xl min-h-[50vw] projects'>
        {data.posts.map((post: PostType) => (
          <FeaturedProject {...post} key={post._id} />
        ))}
      </section>
    </>
  )
}

export default Projects
