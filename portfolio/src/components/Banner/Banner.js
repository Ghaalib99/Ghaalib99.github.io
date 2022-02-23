import TypeWriterEffect from 'react-typewriter-effect';
// import background from '../../assets/banner.jpg'

const Banner = () => {

  const myRef = document.querySelector('.scrollable-div')
  const style = {
    backgroundImage: "url(/hero.jpg)",
    backgroundSize: 'cover',
    zIndex: '2',
    ':before': {
      content: '',
      backgroundColor: 'rgba(5, 13, 24, 0.3)',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      zIndex: '1'
    }
  }

  return (
    <div className="h-screen bg- flex justify-start items-center p-3" id='home' style={style}>
        <div className="flex flex-col justify-center items-center px-4 text-white" data-aos="fade-in">
            <h1 className="mr-2 text-5xl font-bold" data-aos="fade-in">John Doe Chukwuemeka</h1>
            
            <div className="flex mr-2 mt-2 text-4xl font-semibold text-left pl-0">
              <p className="mr-3 ml-0">A</p>
                <TypeWriterEffect
                  textStyle={{
                    // fontFamily: 'Red Hat Display',
                    // color: 'white',
                    // fontWeight: 500,
                    // fontSize: '1.5em',
                    borderBottom: 'blue 3px solid'
                  }}
                    startDelay={1000}
                    cursorColor="#3F3D56"
                    multiText={[
                      'Fullstack Developer',
                      'Freelance Developer',
                      'Web Content Developer',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={100}
                    scrollArea={myRef}
                />
             
            </div>
            
        </div>
    </div>
  )
}

export default Banner