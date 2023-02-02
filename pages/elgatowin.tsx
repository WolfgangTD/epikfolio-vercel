import Image from 'next/image'
import Head from 'next/head'

const ElgatoWin = () =>(
        <>
        <Head>
            <title>Elgato WIN!</title>
        </Head>
            <div>
                <h1>
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

