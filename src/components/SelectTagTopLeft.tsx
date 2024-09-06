import { GoChevronDown } from 'react-icons/go'

const SelectTagTopLeft = () => {
  return (
    <div className='flex flex-wrap flex-auto'>
      <div className='flex justify-center items-center bg-teal-100 m-1 px-2 py-1 border border-teal-300 rounded-full font-medium text-teal-700'>
        <div className='flex-initial max-w-full font-normal text-xs leading-none'>
          HTML
        </div>
        <div className='flex flex-row-reverse flex-auto'>
          <div>
            <GoChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTagTopLeft
