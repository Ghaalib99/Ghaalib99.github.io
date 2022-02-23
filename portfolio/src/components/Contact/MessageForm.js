import React, { useRef} from 'react'

const MessageForm = () => {

    const nameRef = useRef(null)
    const emailRef =  useRef(null)
    const subjectRef = useRef(null)
    const messageRef =  useRef(null)

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value
        }
    }


  return (
    <>
        <form action="" id="form" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                <div className='flex flex-col mb-3'>
                    <label htmlFor="name" className='mb-2 font-semibold'>Your Name</label>
                    <input type="text" ref={nameRef} placeholder='Input your name here' tabIndex={1} className='border py-1 px-3 h-11 outline-none' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="email" className='mb-2 font-semibold'>Your Email</label>
                    <input type="email" ref={emailRef} placeholder='Input your email here' tabIndex={2} className='border py-1 px-3 h-11 outline-none' />
                </div>
            </div>
            
            <div className='flex flex-col mb-3'>
                <label htmlFor="subject" className='mb-2 font-semibold'>Subject</label>
                <input type="text" ref={subjectRef} placeholder='Input subject here' tabIndex={3} className='border py-1 px-3 h-11 outline-none' />
            </div>
            <div className='flex flex-col mb-3'>
                <label htmlFor="message" className='mb-2 font-semibold'>Message</label>
                <textarea name="message" ref={messageRef} id="" cols="30" rows="10" placeholder='Start typing...' tabIndex={4} className='border h-32 py-1 px-3 outline-none'></textarea>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button type='submit' className='bg-sky-600 text-white py-2 px-3 rounded-md w-56 hover:bg-sky-200'>Send Message</button>
            </div>
        </form>
    </>
  )
}

export default MessageForm