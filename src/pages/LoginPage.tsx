import { InputFormRow } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authThunk'
import { AppDispatch, IRootState } from '../store'
import Loading from '../components/Loading'
import { redirect, useLoaderData } from 'react-router-dom'

export const loader = async () => {
  redirect('/')
  return 'something'
}

const Login = () => {
  const data = useLoaderData()
  console.log(data)

  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useSelector((state: IRootState) => state.auth)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    dispatch(login(formData))
  }

  if (isLoading) return <Loading />

  return (
    <>
      <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-12 max-w-7xl h-[calc(100vh-theme(space.16))]'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Login</h2>
        <form onSubmit={handleSubmit} action='' className='w-[90vw] max-w-4xl'>
          <InputFormRow
            type='text'
            text='Username'
            name='username'
            required={true}
          />
          <InputFormRow
            type='password'
            text='Your Password'
            name='password'
            required={true}
          />
          <button className='block bg-emerald-500 mt-10 p-2 rounded-md w-full font-bold text-white'>
            Login
          </button>
        </form>
        <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-600 to-90% to-slate-950 mt-32 mb-10 w-full h-[1px]'></div>
      </section>
    </>
  )
}

export default Login
