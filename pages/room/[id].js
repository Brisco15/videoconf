import Script from "next/script"
import { useRouter } from 'next/router'

export default function Room() {
  const router = useRouter()
  const { id } = router.query 
    return (
      <>
        <Script
        src='https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js'
        onLoad={() => {
          console.log(Peer)
          
        }}
        />
        <h1 className='mt-20 text-center text-3xl uppercase text-blue-500'>
        Room
        </h1>
      </>
      
    )
}

export async function getServerSideProps(context){
  //we need this or the router query data is not available client-side
  //se https;//nextjs.docs/api-reference/next/router#router-object
  return {
    props: {},
  }
}