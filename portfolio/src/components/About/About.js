import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import AboutData from './AboutData'

const About = () => {
  return (
    <div id='about' className='my-3 p-7'>
        <h1 className='text-3xl mb-4 py-2 font-bold border-b-4 border-sky-600'>About</h1>
        <h2 className='text-2xl mb-2 font-bold'>A Fullstack Developer</h2>
        <div className='flex text-justify justify-between'>
            <p className='mr-7' data-aos="fade-right" data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic">I am experienced in building very light and fast web applications. I make sure tasks are perfected on time while still delivering the best quality. I also develop web contents to suit your taste or even better.</p>

            <div className="flex flex-col" data-aos="fade-left" data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic">
                <p className='mb-3'>I am a young, self-taught web developer who is working tirelessly towards making a great career in software development. I have participated in a number of internships and have amassed valuable experience while working alongside other developers. I build really cool, nice and responsive websites and web applications. I speak many languages including JavaScript and Python.</p>
                
                <div className='flex flex-wrap'>
                    <AboutData icon={NavigateNextOutlinedIcon} title='Website:' value='Ghaalib99.github.io' />
                    <AboutData icon={NavigateNextOutlinedIcon} title='Email: ' value=' olaolajide99@gmail.com' />
                    <AboutData icon={NavigateNextOutlinedIcon} title='City: ' value=' Lagos, Nigeria' />
                    <AboutData icon={NavigateNextOutlinedIcon} title='Freelance: ' value=' Available' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About