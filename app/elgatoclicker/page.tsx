import Image from 'next/image'
import React from 'react'
import Head from 'next/head';

export default function ElgatoClicker() {

    return (
        <>
        <Head>
            <title>Elgato Clicker</title>
        </Head>

        <div className='text-center bg-orange-500 min-h-screen pt-10'>
            <h1 className="text-white">
                Elgato Clicker will be ported here
            </h1>
            <h3 className="text-white">
                Created by Me
            </h3>
            <p className="text-white">this is a website to make epik el gato game</p>
            <br></br>
            <div className='justify-center flex'>
            <Image 
                width='250'
                height='250'
                src="/elgato.png"
                alt="el gato"
                id="elgato"  
                draggable = 'false'
            />
            </div>
            <br></br>
            <p className="text-white">Dabloons: </p>

            <p className="text-white">Upgrade 1:  </p>
            <p className="text-white">Upgrade 2:  </p>
            <p className="text-white">Upgrade 3:  </p>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" > Upgrade 1 costs 10 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" > Upgrade 2 costs 100 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" > Upgrade 3 costs 1000 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" > Beat the game - costs 1 million Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" > reset </button>
        </div>
        </>
    )
}

