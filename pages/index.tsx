import Link from 'next/link'
import Head from 'next/head'
const Index = () => (
  <>
    <div>
      <Head>
        <link rel="shortcut icon" href="../cool-favicon64x64.ico" />
        <title>Wolf's Portfolio</title>
      </Head>
      <h1>
        Hello World
      </h1>
        <Link href='/catfax'>
            <p>CLICK HERE FOR CAT FACTS!!!!</p>
        </Link>
        
        <Link href='/elgatoclicker'>
            <p>CLICK HERE FOR ELGATO CLICKER :O</p>
        </Link>
    </div>
  </>
  )
  
  export default Index