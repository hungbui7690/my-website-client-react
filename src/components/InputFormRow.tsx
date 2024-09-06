interface IInputFormRow {
  type: string
  text: string
  name: string
  placeholder?: string
  required?: boolean
  // value?: string
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFormRow = ({
  type,
  text,
  name,
  placeholder,
  required,
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
          name={name}
          placeholder={placeholder}
          autoComplete={`${type === 'password'}`}
          required={required}
          className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={5}
          className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
        ></textarea>
      )}
    </div>
  )
}

export default InputFormRow
