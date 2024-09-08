import { useEffect } from 'react'
import { useGlobalContext } from '../App'
import { InputFormRow, Tag } from '../components'
import { createTag } from '../utils/tag'
import { axiosInstance } from '../utils/axios'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/Loading'

interface ITag {
  _id: string
  name: string
  colors: string[]
}

const AddTag = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isPending, isError, data } = useQuery({
    queryKey: ['add-tag-page'],
    queryFn: async () => {
      const res = await axiosInstance.get('/tag')
      return res.data
    },
  })

  if (isPending) return <Loading />
  if (isError) return <p>Error...</p>

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const colors = formData.get('colors')
    formData.set('colors', `bg-${colors}-100`)
    formData.append('colors', `border-${colors}-300`)
    formData.append('colors', `text-${colors}-700`)
    formData.append('colors', `text-${colors}-500`)
    formData.append('colors', `border-${colors}-500`)
    const formDataEntries = Object.fromEntries(formData)
    console.log(formDataEntries)

    createTag(formData)
    window.location.reload()
  }

  return (
    <>
      <div className='flex flex-wrap justify-center items-center mt-8 max-w-7xl'>
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

      <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-12 max-w-7xl h-[calc(100vh-theme(space.16))]'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Add Tag</h2>
        <form className='w-[90vw] max-w-4xl' onSubmit={handleSubmit}>
          <InputFormRow type='text' text='Name' name='name' required={true} />
          <InputFormRow
            type='text'
            text='Color'
            name='colors'
            placeholder='enter tailwind colors: teal, slate, zinc...'
            required={true}
          />
          <button className='block bg-emerald-500 mt-10 p-2 rounded-md w-full font-bold text-white'>
            Add
          </button>
        </form>
        <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-600 to-90% to-slate-950 mt-32 mb-10 w-full h-[1px]'></div>
      </section>
    </>
  )
}

export default AddTag
