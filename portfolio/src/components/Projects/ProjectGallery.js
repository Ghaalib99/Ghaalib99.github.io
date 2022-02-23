
import Projects from './Projects'

const ProjectGallery = () => {

    const images = [
        './ecommerce.jpg',
        './farm.jpg',
        './profile.jpg'
    ]

  return (
    <>
        <Projects images={images} />
    </>
  )
}

export default ProjectGallery