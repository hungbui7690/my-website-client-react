import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../App'
import { InputFormRow } from '../components'
import ContactImage from '../images/contact-1.svg'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const ContactPage = () => {
  const { setIsOpen } = useGlobalContext()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)

    const currentForm = formRef.current
    if (!currentForm) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        currentForm,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(
            `Your email is successfully sent. I will answer you as soon as I reach it. Thanks 😉`
          )
        },
        () => {
          toast.error(`Cannot sent email due to server error 😐`)
        }
      )

    currentForm.reset()
  }

  return (
    <>
      <h2 className='my-10 font-bold text-center'>Contact</h2>
      <section className='flex justify-between gap-20 mx-auto px-4 md:px-12 max-w-7xl'>
        <div className='flex flex-col justify-center sm:basis-1/2 basis-full description'>
          <form className='max-w-4xl' ref={formRef} onSubmit={sendEmail}>
            <InputFormRow
              type='text'
              text='Your Name'
              name='from_name'
              required
            />
            <InputFormRow
              type='email'
              text='Your Email'
              name='from_email'
              required
            />
            <InputFormRow
              type='subject'
              text='Subject'
              name='subject'
              required
            />
            <InputFormRow
              type='textarea'
              text='Your Message'
              name='message'
              required
            />

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
