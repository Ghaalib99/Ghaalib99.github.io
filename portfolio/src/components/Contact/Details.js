


const Details = (props) => {
    const HomeOutlinedIcon = props.icon
  return (
    <div>
        <div className='flex mb-0'>
            <div className='text-center p-3 w-8 h-8 mr-3 h-12 w-12 bg-sky-200 hover:bg-sky-600 text-sky-600 hover:text-white text-6xl flex justify-center items-center' style={{borderRadius:'50%'}}>
                <HomeOutlinedIcon className='' />
            </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl mb-2 font-semibold">{props.title}</h1>
                    <p><a>{props.value}</a></p>
                </div>
        </div>
        
    </div>
  )
}

export default Details