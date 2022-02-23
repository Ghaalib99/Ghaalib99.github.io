
const Menu = (props) => {
    const HomeOutlinedIcon = props.icon
    // const PersonOutlineOutlinedIcon = props.icon
  return (
    <>
        <a href={props.link} className='flex text-gray-500 text-xl mb-6 active:text-sky-600'>
            <div className="icon mr-2">
                <HomeOutlinedIcon className='' />
            </div>
            <div className="menu ">
                <h3>{props.title}</h3>
            </div>
        </a>

    </>
  )
}

export default Menu