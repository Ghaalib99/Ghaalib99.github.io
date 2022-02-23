import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <div className='w-1/5 p-2.5 h-screen fixed' style={{backgroundColor:'#040b14'}}>
        <h1 className='text-lg text-white font-bold flex items-center justify-center mb-2 mt-4'>John Doe Chukwuemeka</h1>
        <div className='flex justify-center items-center'>
          <a href="" className='text-center p-3 w-9 h-9 mr-3 flex justify-center items-center bg-gray-800 hover:bg-sky-600' style={{borderRadius:'50%'}}>
            <TwitterIcon className='text-white text-base'/>
          </a>
          <a href="" className='text-center p-3 w-9 h-9 flex justify-center items-center bg-gray-800 hover:bg-sky-600' style={{borderRadius:'50%'}}>
            <LinkedInIcon className='text-white text-base'/>
          </a>
          
        </div>
        <div className='ml-4 p-3 m-12'>
          <Menu link='#home' icon={HomeOutlinedIcon} title='Home'/>
          <Menu link='#about' icon={PersonOutlineOutlinedIcon} title='About'/>
          <Menu link='#skills' icon={InsertDriveFileOutlinedIcon} title='Skills'/>
          <Menu link='#projects' icon={AssignmentOutlinedIcon} title='Projects'/>
          <Menu link='#services' icon={HorizontalSplitOutlinedIcon} title='Services'/>
          <Menu link='#contact' icon={EmailOutlinedIcon} title='Contact'/>
        </div>
        <div className='text-white text-center text-xs mt-7'  style={{marginBottom:'2%'}}>
          <p>Designed by Ghaalib99</p> 
          <p>olaolajide99@gmail.com</p>
        </div>
        
    </div>
  )
}

export default Sidebar