import { InputFormRow } from '../components'
import ContactImage from '../images/contact-1.svg'

const ContactPage = () => {
  return (
    <>
      <h2 className='my-10 font-bold text-center'>Contact</h2>
      <section className='flex justify-between gap-20 mx-auto px-4 md:px-12 max-w-7xl'>
        <div className='flex flex-col justify-center sm:basis-1/2 basis-full description'>
          <form action='' className='max-w-4xl'>
            <InputFormRow type='text' text='Your Name' name='name' />
            <InputFormRow type='email' text='Your Email' name='email' />
            <InputFormRow type='textarea' text='Your Message' name='message' />

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
