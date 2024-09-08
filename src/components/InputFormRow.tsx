interface IInputFormRow {
  type: string
  text: string
  name: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
}

const InputFormRow = ({
  type,
  text,
  name,
  placeholder,
  required,
  defaultValue,
}: IInputFormRow) => {
  return (
    <div className='form-row mt-6'>
      <label htmlFor={name} className='block mb-4 text-sm tracking-wide'>
        {text}
      </label>
      {type !== 'textarea' ? (
        <input
          type={type}
          id={name}
          defaultValue={defaultValue}
          name={name}
          placeholder={placeholder}
          autoComplete={`${type === 'password'}`}
          required={required}
          className='block border-gray-500 focus:border-gray-300 bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          rows={3}
          className='block border-gray-500 focus:border-gray-300 bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
        ></textarea>
      )}
    </div>
  )
}

export default InputFormRow
