import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../utils/axios'
import { Tag } from '../components'
import Loading from '../components/Loading'
import { useGlobalContext } from '../App'
import { useEffect } from 'react'

interface ITag {
  _id: string
  name: string
  colors: string[]
}

const TagsPage = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isPending, isError, data } = useQuery({
    queryKey: ['tagPage'],
    queryFn: async () => {
      const res = await axiosInstance.get('/tag')
      return res.data
    },
  })

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  return (
    <>
      <h2 className='mt-16 mb-8 font-bold text-center'>Tags</h2>
      <div className='flex justify-center items-center min-h-[50vw]'>
        <div className='flex flex-wrap text-center'>
          {data.tags.map((tag: ITag) => {
            const { _id, name, colors } = tag
            return (
              <Tag
                key={_id}
                bgColor={colors[0]}
                borderColor={colors[1]}
                textColor={colors[2]}
                text={name}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TagsPage
