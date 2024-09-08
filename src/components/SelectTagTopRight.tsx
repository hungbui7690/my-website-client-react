const SelectTagTopRight = () => {
  return (
    <div className='flex items-center border-gray-500 py-1 pr-1 pl-2 border-l w-8 text-gray-300'>
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
  )
}

export default SelectTagTopRight
