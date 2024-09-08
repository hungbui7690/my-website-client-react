import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../utils/axios'
import { type AxiosResponse } from 'axios'
import Loading from './Loading'

interface Props {
  tagID: string
}

const FeaturedProjectTag = ({ tagID }: Props) => {
  const { isPending, isError, data } = useQuery({
    queryKey: ['featured-project-tag', tagID],
    queryFn: async () => {
      const res: AxiosResponse = await axiosInstance.get(`/tag/${tagID}`)
      return res.data
    },
  })

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  return (
    <span
      className={`border-2 ${data.tag.colors[0]} ${data.tag.colors[1]} ${data.tag.colors[2]} px-4 p-1 rounded-full font-normal text-xs  leading-none`}
    >
      {data.tag.name}
    </span>
  )
}

export default FeaturedProjectTag
