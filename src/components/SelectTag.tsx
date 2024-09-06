import SelectTagTopLeft from './SelectTagTopLeft'
import SelectTagTopRight from './SelectTagTopRight'
import SelectTagBottom from './SelectTagBottom'

const SelectTag = () => {
  return (
    <div className='form-row mt-6'>
      <label htmlFor='tags' className='block mb-2 text-sm tracking-wide'>
        Tags
      </label>

      <div className='flex flex-col items-center mx-auto w-full'>
        <div className='px-4 w-full'>
          <div className='flex flex-col items-center'>
            {/* Top */}
            <div className='w-full'>
              <div className='flex border-gray-200 bg-white my-2 p-1 border rounded'>
                {/* Top Left - Cyan with X */}
                <SelectTagTopLeft />

                {/* Top Right - Chevron */}
                <SelectTagTopRight />
              </div>
            </div>

            {/* Bottom - Select */}
            <SelectTagBottom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTag
