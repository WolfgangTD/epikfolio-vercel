import Link from 'next/link'
import Head from 'next/head'

export default function Page() {

  return(
  <>
    <div>
      <Head>
        
        <title>Wolf's Portfolio</title>
      </Head>
      <br></br>
      <div className='pt-10'>
      <h1 className="text-center text-3xl underline text-white">
        Welcome to the epik portfolio made by Wolfgang
      </h1>
      </div>
      <br></br>
      <br></br>
      <p className='text-center text-9xl text-green-300' >hush child</p>
      <br></br>
      <br></br>
      <div className='text-white'>
        <p className='text-center text-xl'>
          Things I wanna add to the website
        </p>
          <br></br>
          <ul className='list-disc list-inside'>
            <li className='float-left px-28 pb-5'>I would like to add a working database using prisma where users can login</li>
            <li className='float-left px-28 pb-5'>Learn to call an api that shows randomly generated pictures of cats</li>
            <li className='float-left px-28 pb-5'>Add in a page that will be like a group chat for users</li>
            <li className='float-left px-28 pb-5'>The ability to create a forum post for users</li>
            <li className='float-left px-28 pb-5'>A page where you will be able to talk to chatgpt and ask it for words of encourgement</li>
            <li className='float-left px-28 pb-5'>
              A page that will act like <Link href='/pomofocusredir' target='_blank'><span className='underline font-bold hover:text-green-300'>pomofocus.io</span></Link></li>
          </ul>
      </div>
    </div>
  </>
  )
}