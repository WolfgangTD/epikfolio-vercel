import Link from 'next/link'
import Head from 'next/head'

const Index = () => (
  <>
    <div>
      <Head>
        <link rel="shortcut icon" href="../cool-favicon64x64.ico" />
        <title>Wolf's Portfolio</title>
      </Head>
      <nav className='bg-white border-solid'>
          <Link href='/elgatoclicker' className='text-green-400 bg-slate-900 border-solid border-teal-600 text-4xl '>Hello</Link>
      </nav>
      <br></br>
      <h1 className="text-center text-3xl underline text-white">
        Welcome to the epik portfolio made by Wolfgang
      </h1>
      <br></br>
      <br></br>
      <p className='text-center text-9xl text-green-300' >hush child</p>
      <br></br>
      <br></br>
      <div className='text-center text-xl'>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-green-400 px-5"
 href='/catfax'>
            CLICK HERE FOR CAT FACTS!!!!
        </Link>
      </div>
      <br></br>
      <br></br>
      <div className='text-center text-xl'>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-green-400 px-5"
 href='/elgatoclicker'>
            CLICK HERE FOR ELGATO CLICKER :O
        </Link>
      </div>
    </div>
  </>
  )
  
  export default Index