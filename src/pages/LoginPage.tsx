const Login = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center mx-auto px-4 md:px-12 max-w-7xl h-[calc(100vh-theme(space.16))]'>
        <h2 className='mt-0 mb-8 font-bold text-center'>Login</h2>
        <form action='' className='w-[90vw] max-w-4xl'>
          <div className='form-row'>
            <label
              htmlFor='username'
              className='block mb-4 text-sm tracking-wide'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <div className='form-row'>
            <label
              htmlFor='password'
              className='block mb-4 text-sm tracking-wide'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='on'
              className='block border-white focus:border-white bg-transparent shadow-sm p-2 border border-solid rounded-md focus:ring-white w-full sm:text-sm outline outline-none'
            />
          </div>
          <button className='block bg-rose-500 p-2 rounded-md w-full font-bold text-white'>
            Login
          </button>
        </form>
        <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-600 to-90% to-slate-950 mt-32 mb-10 w-full h-[1px]'></div>
      </section>
    </>
  )
}

export default Login
