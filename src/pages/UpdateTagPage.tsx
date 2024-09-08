import { useEffect } from 'react'
import { useGlobalContext } from '../App'

const UpdateTag = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>Update Tag</div>
}

export default UpdateTag
