import { useEffect } from 'react'
import { Skills, FeaturedProjects, Hero } from '../components'
import { useGlobalContext } from '../App'

const Landing = () => {
  const { setIsOpen } = useGlobalContext()

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
    </>
  )
}

export default Landing
