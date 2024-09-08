import { useState } from 'react'

type Props = {
  label: string
}

const ToggleSwitch = ({ label }: Props) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className='form-row mt-6'>
      <label className='block mb-4 text-sm tracking-wide'>{label}</label>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          name='featured'
          className='peer sr-only'
          onChange={handleChange}
        />
        <div className="relative after:top-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 dark:border-gray-600 bg-gray-200 after:bg-white dark:bg-gray-700 peer-checked:bg-emerald-500 after:border rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-emerald-700 w-11 h-6 peer-focus:outline-none after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer after:start-[2px]"></div>
      </label>
    </div>
  )
}

export default ToggleSwitch
