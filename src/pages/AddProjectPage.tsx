import { InputFormRow, SelectTag } from '../components'

const AddProject = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center mx-auto mt-8 px-4 md:px-12 max-w-7xl'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Add Project</h2>
        <form action='' className='w-[90vw] max-w-4xl'>
          <InputFormRow type='text' text='Title' name='title' />
          <InputFormRow type='textarea' text='Description' name='description' />
          <InputFormRow type='textarea' text='Content' name='content' />
          <InputFormRow type='text' text='Github URL' name='github' />
          <InputFormRow type='text' text='URL' name='url' />
          <div className='form-row mt-6'>
            <label htmlFor='image' className='block mb-2 text-sm tracking-wide'>
              Image
            </label>
            <input type='file' name='file' />
          </div>

          {/* # TAGS  */}
          <SelectTag />

          {/* # Add Button */}
          <button className='block bg-sky-500 my-20 p-2 rounded-md w-full font-bold text-white'>
            Add
          </button>
        </form>
        <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-600 to-90% to-slate-950 mt-32 mb-10 w-full h-[1px]'></div>
      </section>
    </>
  )
}

export default AddProject
