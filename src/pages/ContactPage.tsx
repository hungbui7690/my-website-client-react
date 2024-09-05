import ContactImage from '../images/contact-1.svg'

const ContactPage = () => {
  return (
    <>
      <h2 className='my-20 font-bold text-center'>Contact</h2>
      <section className='flex justify-between gap-20 mx-auto px-4 md:px-12 max-w-7xl'>
        <div className='flex flex-col justify-center sm:basis-1/2 basis-full description'>
          <form action='' className='max-w-4xl'>
            <div className='form-row'>
              <label
                htmlFor='name'
                className='block mb-4 text-sm tracking-wide'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
              />
            </div>
            <div className='form-row'>
              <label
                htmlFor='email'
                className='block mb-4 text-sm tracking-wide'
              >
                Password
              </label>
              <input
                type='email'
                id='email'
                name='email'
                autoComplete='on'
                className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
              />
            </div>
            <div className='form-row'>
              <label
                htmlFor='message'
                className='block mb-4 text-sm tracking-wide'
              >
                Your Message
              </label>
              <textarea
                name='message'
                id='message'
                rows={5}
                className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
              ></textarea>
            </div>
            <button className='block bg-[#00BFA6] mt-10 p-2 rounded-md w-full font-bold text-white'>
              Send Email
            </button>
          </form>
        </div>

        <div className='sm:flex sm:basis-1/2 flex-col justify-center hidden img-container'>
          <img
            className='w-full object-cover'
            src={ContactImage}
            alt='cartoon'
          />
        </div>
      </section>

      <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-500 to-90% to-slate-950 my-28 w-full h-[1px]'></div>
    </>
  )
}

export default ContactPage
