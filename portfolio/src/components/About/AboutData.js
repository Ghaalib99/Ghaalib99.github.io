
const AboutData = (props) => {
    const NavigateNextOutlinedIcon = props.icon
  return (
    <div className="w-2/5 mr-5 mb-3 flex">
        <NavigateNextOutlinedIcon className='text-sky-600 mr-2'/>
        <h2 className="font-bold">{props.title}</h2>
        <p>{props.value}</p>
    </div>
  )
}

export default AboutData