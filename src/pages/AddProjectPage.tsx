import { useEffect, useState } from 'react'
import { useGlobalContext } from '../App'
import { InputFormRow, SelectTag, ToggleSwitch } from '../components'
import { uploadImage } from '../utils/uploadImage'
import { createProject } from '../utils/project'
import { useNavigate } from 'react-router-dom'

const AddProject = () => {
  const { setIsOpen, tagID } = useGlobalContext()
  const [coverImageURL, setCoverImageURL] = useState<string>('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0]
    console.log(file)

    const imageTypes = ['image/png', 'image/jpeg', 'image/jpg']
    if (!imageTypes.includes((file as File).type)) {
      console.log('wrong type')
      setMessage('Not a correct image extension')
    } else {
      setMessage('')
      const formData = new FormData()
      if (file) formData.append('file', file)
      const { image_src } = await uploadImage(formData)
      setCoverImageURL(() => {
        if (image_src) return image_src
        else return
      })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    formData.set('image', coverImageURL)

    const featured = formData.get('featured')
    if (featured === 'on') formData.set('featured', 'true')
    else formData.set('featured', 'false')

    const formDataEntries = Object.fromEntries(formData)
    console.log(formDataEntries)

    createProject(formData)
    navigate('/projects')
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center mx-auto mt-8 px-4 md:px-12 max-w-7xl'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Add Project</h2>
        <form onSubmit={handleSubmit} className='w-[90vw] max-w-4xl'>
          <InputFormRow
            type='text'
            text='Title'
            name='title'
            defaultValue='title'
          />
          <InputFormRow
            type='textarea'
            text='Description'
            name='description'
            defaultValue='description test'
          />
          <InputFormRow
            type='textarea'
            text='Content'
            name='content'
            defaultValue='content test'
          />
          <InputFormRow
            type='text'
            text='Github URL'
            name='github'
            defaultValue='https://github.com/hungbui7690/nodejs-tutorials'
          />
          <InputFormRow
            type='text'
            text='URL'
            name='url'
            defaultValue='https://github.com/hungbui7690/nodejs-tutorials'
          />

          {/* # File Upload */}
          <div className='form-row mt-6'>
            <label htmlFor='image' className='block mb-2 text-sm tracking-wide'>
              Image
            </label>
            <input
              type='file'
              name='file'
              onChange={handleUploadImage}
              required
            />
            <p className='text-base text-rose-500'>{message}</p>
          </div>

          {/* # Featured */}
          <ToggleSwitch label='Featured' />

          {/* # TAGS  */}
          <SelectTag />

          <button
            type='submit'
            disabled={coverImageURL === '' || tagID.length === 0 ? true : false}
            className={`block ${
              coverImageURL === '' || tagID.length === 0
                ? 'bg-transparent'
                : 'bg-emerald-500'
            } my-20 p-2 rounded-md w-full font-bold text-white border border-emerald-700`}
          >
            Add
          </button>
        </form>
        <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-600 to-90% to-slate-950 mt-32 mb-20 w-full h-[1px]'></div>
      </section>
    </>
  )
}

export default AddProject
