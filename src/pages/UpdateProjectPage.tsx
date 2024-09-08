import { useEffect } from 'react'
import { useGlobalContext } from '../App'

const UpdateProject = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>UpdateProject</div>
}

export default UpdateProject
