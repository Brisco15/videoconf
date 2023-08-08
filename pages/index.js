import Head from 'next/head'
import Router from 'next/router'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Videoconf</title>
        <meta name='description' content='Videoconf' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='mt-20 text-center text-3xl uppercase text-blue-700'>
        Videoconf
      </h1>
      <button 
        className='block mx-auto bg-blue-500 text-white p-3 rounded-2xl mt-20 text-2xl hover:bg-blue-300'
        onClick={()=> {
          Router.push(`/room/${crypto.randomUUID().split('-')[0]}`)
        }}
        >
        Create a new chat room
      </button>
    </div>
  )
}   