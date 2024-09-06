const SelectTagBottom = () => {
  return (
    <div className='top-100 left-0 z-40 bg-white shadow rounded w-full max-h-select overflow-y-auto'>
      <div className='flex flex-col w-full text-slate-400'>
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
  )
}

export default SelectTagBottom
