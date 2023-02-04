import Link from 'next/link'
import Head from 'next/head'
const Index = () => (
  <>
    <div>
      <Head>
        <link rel="shortcut icon" href="../cool-favicon64x64.ico" />
        <title>Wolf's Portfolio</title>
      </Head>
      <br></br>
      <h1 className="text-center text-3xl underline text-white">
        Welcome to the epik portfolio made by Wolfgang
      </h1>
      <br></br>
      <br></br>
      <p className='text-center text-9xl text-green-300' >hush child</p>
      <br></br>
      <br></br>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
 href='/catfax'>
            <p>CLICK HERE FOR CAT FACTS!!!!</p>
        </Link>
      <br></br>
        <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
 href='/elgatoclicker'>
            <p>CLICK HERE FOR ELGATO CLICKER :O</p>
        </Link>
    </div>
  </>
  )
  
  export default Index