import {
  Windows,
  Linux,
  CSS,
  Javascript,
  NodeJS,
  BunJS,
  Typescript,
  Python,
  Tailwind,
  Sass,
  Figma,
  Git,
  Github,
  Prisma,
  React,
  Express,
  Elysia,
  NextJS,
  Docker,
  // Kubernetes,
  GithubAction,
  MongoDB,
  Postgres,
  MySQL,
  SQLite,
  DB2,
  Supabase,
} from './'

const Skills = () => {
  return (
    <>
      <section className='mx-auto mb-24 px-4 md:px-12 max-w-7xl'>
        <h2 className='font-bold text-center'>Technologies</h2>
        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='basis-1/4'>OS</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Windows}
                alt='windows'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Linux}
                alt='linux'
              />
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='basis-1/4'>Languages</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='skill'>
              <img className='w-10 sm:w-14 object-cover' src={CSS} alt='css' />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Javascript}
                alt='javascript'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={NodeJS}
                alt='nodejs'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={BunJS}
                alt='bun-js'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Typescript}
                alt='typescript'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Python}
                alt='python'
              />
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='basis-1/4'>Extensions</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='text-center skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Tailwind}
                alt='tailwind'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Sass}
                alt='sass'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Figma}
                alt='figma'
              />
            </div>
            <div className='skill'>
              <img className='w-10 sm:w-14 object-cover' src={Git} alt='git' />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Github}
                alt='github'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Prisma}
                alt='prisma'
              />
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='basis-1/4'>Frameworks</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={React}
                alt='react'
              />
            </div>
            <div className='flex items-center skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Express}
                alt='express'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Elysia}
                alt='elysia-js'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={NextJS}
                alt='nextjs'
              />
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='basis-1/4'>DevOps</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Docker}
                alt='docker'
              />
            </div>
            {/* <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Kubernetes}
                alt='kubernetes'
              />
            </div> */}
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={GithubAction}
                alt='github-action'
              />
            </div>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col gap-x-20 gap-y-8 mb-16'>
          <h4 className='mb-4 sm:mb-4 basis-1/4'>Database</h4>
          <div className='flex flex-wrap justify-start gap-8 basis-3/4'>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={MongoDB}
                alt='mongodb'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Postgres}
                alt='postgres'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={MySQL}
                alt='mysql'
              />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={SQLite}
                alt='sqlite'
              />
            </div>
            <div className='skill'>
              <img className='w-10 sm:w-14 object-cover' src={DB2} alt='db2' />
            </div>
            <div className='skill'>
              <img
                className='w-10 sm:w-14 object-cover'
                src={Supabase}
                alt='supabase'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-r from-10% from-slate-950 via-emerald-700 to-90% to-slate-950 mt-10 mb-10 w-full h-[1px]'></div>
    </>
  )
}

export default Skills
