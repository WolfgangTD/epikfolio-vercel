import Link from 'next/link'

const Index = () => (
    <div>
      <h1>
        Hello World
      </h1>
        <Link href='/catfax'>
            <p>CLICK HERE FOR CAT FACTS!!!!</p>
        </Link>
        
        <Link href='/elgatoclicker'>
            <p>CLICK HERE FOR ELGATO CLICKER :O</p>
        </Link>

        <Link href='/movies'>
            <p>testing mongodb</p>
        </Link>
    </div>
  )
  
  export default Index