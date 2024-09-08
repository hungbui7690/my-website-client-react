interface ITagProp {
  bgColor: string
  borderColor: string
  textColor: string
  text: string
}

const Tag = ({ bgColor, borderColor, textColor, text }: ITagProp) => {
  return (
    <div
      className={`flex justify-center items-center ${bgColor} m-1 px-2 py-1 border-2 ${borderColor} rounded-full font-medium ${textColor}`}
    >
      <div className='flex-initial max-w-full font-normal leading-none'>
        {text}
      </div>
    </div>
  )
}

export default Tag
