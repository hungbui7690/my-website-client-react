interface IProjectTag {
  tagName: string
}

const FeaturedProjectTag = ({ tagName }: IProjectTag) => {
  return (
    <span
      className={`border-2 border-teal-300 px-4 p-1 rounded-full font-normal text-xs text-yellow-500 leading-none`}
    >
      {tagName}
    </span>
  )
}

export default FeaturedProjectTag
