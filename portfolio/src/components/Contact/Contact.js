import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Details from './Details'
import MessageForm from './MessageForm'
// import Map from "./Map"


const Contact = () => {
  return (
    <div id='contact' className='my-3 p-7'>
        <h1 className='text-3xl mb-7 py-2 font-bold border-b-4 border-sky-600'>Contact</h1>
        <div className='flex text-justify justify-between py-5 px-8' data-aos="fade-up" data-aos-delay="50"  data-aos-duration="2000"   data-aos-easing="ease-in-out-cubic">
          <div className='flex flex-col text-justify justify-between w-2/5 shadow-2xl py-5 px-8 mr-7'>
            <Details icon={HomeOutlinedIcon} title='Location:' value='Lagos, Nigeria' />
            <Details icon={HomeOutlinedIcon} title='Email:' value='olaolajide99@gmail.com' />
            <Details icon={HomeOutlinedIcon} title='Call:' value='+2348167521881' />

            <div className="mt-2">
              {/* <Map /> */}
            </div>
          </div>
          <div className='w-7/12 shadow-2xl py-5 px-8'>
            <MessageForm />
          </div>
        </div>
    </div>
  )
}

export default Contact