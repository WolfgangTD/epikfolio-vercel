import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const ElgatoWin = () =>(
        <>
        <Head>
            <title>Elgato WIN!</title>
        </Head>
        <nav>
        <ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
          <li className='float-left'><Link href='/' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Home</Link></li>
          <li className='float-left'><Link href='/catfax' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Cat Facts</Link></li>
          <li className='float-left'><Link href='/elgatoclicker' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Elgato Clicker</Link></li>
        </ul>
      </nav>
            <div>
                <h1 className="text-white">
                    CONGRAGULATIONS ON BEATING ELGATO CLICKER
                </h1>
                <Image
                    src="/break-dance-cat.gif"
                    width='1000'
                    height='800'
                    alt="el gato break dancing"
                />
            </div>
        </>
    )
export default ElgatoWin

