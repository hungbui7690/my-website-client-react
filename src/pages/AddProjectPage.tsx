const AddProject = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center mx-auto mt-8 px-4 md:px-12 max-w-7xl'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Add Project</h2>
        <form action='' className='w-[90vw] max-w-4xl'>
          <div className='form-row mt-6'>
            <label htmlFor='title' className='block mb-2 text-sm tracking-wide'>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row mt-6'>
            <label
              htmlFor='description'
              className='block mb-2 text-sm tracking-wide'
            >
              Description
            </label>
            <input
              type='text'
              id='description'
              name='description'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row mt-6'>
            <label
              htmlFor='content'
              className='block mb-2 text-sm tracking-wide'
            >
              Content
            </label>
            <input
              type='text'
              id='content'
              name='content'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row mt-6'>
            <label
              htmlFor='github'
              className='block mb-2 text-sm tracking-wide'
            >
              Github URL
            </label>
            <input
              type='text'
              id='github'
              name='github'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row mt-6'>
            <label htmlFor='url' className='block mb-2 text-sm tracking-wide'>
              URL
            </label>
            <input
              type='text'
              id='url'
              name='url'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row mt-6'>
            <label htmlFor='image' className='block mb-2 text-sm tracking-wide'>
              Image
            </label>
            <input type='file' />
          </div>

          {/* # TAGS  */}
          <div className='form-row mt-6'>
            <label htmlFor='tags' className='block mb-2 text-sm tracking-wide'>
              Tags
            </label>
            <div className='flex flex-col items-center mx-auto w-full'>
              <div className='px-4 w-full'>
                <div className='flex flex-col items-center'>
                  <div className='w-full'>
                    <div className='flex border-gray-200 bg-white my-2 p-1 border rounded'>
                      <div className='flex flex-wrap flex-auto'>
                        <div className='flex justify-center items-center bg-teal-100 m-1 px-2 py-1 border border-teal-300 rounded-full font-medium text-teal-700'>
                          <div className='flex-initial max-w-full font-normal text-xs leading-none'>
                            HTML
                          </div>
                          <div className='flex flex-row-reverse flex-auto'>
                            <div>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='100%'
                                height='100%'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='ml-2 rounded-full w-4 h-4 hover:text-teal-400 cursor-pointer feather feather-x'
                              >
                                <line x1='18' y1='6' x2='6' y2='18'></line>
                                <line x1='6' y1='6' x2='18' y2='18'></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center border-gray-200 py-1 pr-1 pl-2 border-l w-8 text-gray-300'>
                        <button className='w-6 h-6 text-gray-600 cursor-pointer outline-none focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='100%'
                            height='100%'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='w-4 h-4 feather feather-chevron-up'
                          >
                            <polyline points='18 15 12 9 6 15'></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='top-100 left-0 z-40 bg-white shadow rounded w-full max-h-select overflow-y-auto'>
                    <div className='flex flex-col w-full'>
                      <div className='border-gray-100 hover:bg-teal-100 border-b rounded-t w-full cursor-pointer'>
                        <div className='flex items-center p-2 pl-2 border-transparent hover:border-teal-100 border-l-2 w-full'>
                          <div className='flex items-center w-full'>
                            <div className='mx-2 leading-6'>Python</div>
                          </div>
                        </div>
                      </div>
                      <div className='border-gray-100 hover:bg-teal-100 border-b w-full cursor-pointer'>
                        <div className='flex items-center p-2 pl-2 border-teal-600 border-transparent border-l-2 w-full'>
                          <div className='flex items-center w-full'>
                            <div className='mx-2 leading-6'>Javascript</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
