import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const ElgatoWin = () =>(
        <>
        <html className='bg-zinc-800'>
        <Head>
            <title>Elgato WIN!</title>
        </Head>

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
        </html>
        </>
    )
export default ElgatoWin

