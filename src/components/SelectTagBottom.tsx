import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../utils/axios'
import Loading from './Loading'
import React from 'react'
import { useGlobalContext } from '../App'

interface ITag {
  name: string
  _id: string
}

const SelectTagBottom = () => {
  const { tagID, setTagID, setTagName, tagName } = useGlobalContext()

  const { isPending, isError, data } = useQuery({
    queryKey: ['tag-bottom'],
    queryFn: async () => {
      const res = await axiosInstance.get('/tag')
      return res.data
    },
  })

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    const tagNameData = e.target.dataset.name as string

    if (checked) {
      setTagID([...tagID, value])
      setTagName([...tagName, tagNameData])
    } else {
      setTagID(tagID.filter((e) => e !== value))
      setTagName(tagName.filter((e) => e !== tagNameData))
    }
  }

  return (
    <div className='top-100 left-0 z-40 border-slate-500 bg-transparent shadow border rounded w-full max-h-select overflow-y-auto'>
      <div className='grid sm:grid-cols-4 w-full text-slate-500'>
        {data.tags.map((tag: ITag) => {
          return (
            <div
              key={tag._id}
              className='hover:bg-teal-800 rounded-t w-full hover:text-slate-800 cursor-pointer'
            >
              <div className='flex items-center w-full ps-4'>
                <input
                  onChange={handleChange}
                  id={`bordered-checkbox-${tag.name}`}
                  type='checkbox'
                  value={tag._id}
                  name='tags'
                  className='accent-pink-500'
                  data-name={tag.name}
                />
                <label
                  htmlFor={`bordered-checkbox-${tag.name}`}
                  className='py-4 w-full font-medium text-gray-900 text-sm dark:text-gray-300 ms-2'
                >
                  {tag.name}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectTagBottom
