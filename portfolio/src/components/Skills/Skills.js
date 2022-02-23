import ProgressBarComp from "./ProgressBarComp"


const Skills = () => {
  return (
    <div id='skills' className='bg-blue-50 mt-3 p-7'>
        <h1 className='text-3xl mb-4 py-2 font-bold border-b-4 border-sky-600'>Skills</h1>
        <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="2000"   data-aos-easing="ease-in-out-cubic">
          <ProgressBarComp title='REACT' level='90' />
          <ProgressBarComp title='PYTHON FLASK' level='70' />
          <ProgressBarComp title='MYSQL' level='70' />
          <ProgressBarComp title='GIT/GITHUB' level='95' />
        </div>
        
    </div>
  )
}

export default Skills