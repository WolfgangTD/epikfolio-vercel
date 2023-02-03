import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function ElgatoClicker() {

    let router = useRouter();

    const [clicks, setClicks] = React.useState(0);
    const [upgrade1, setUpgrade1] = React.useState(0);
    const [upgrade2, setUpgrade2] = React.useState(0);
    const [upgrade3, setUpgrade3] = React.useState(0);
    
    function handleClick(){
        setClicks(clicks + 1 + upgrade1 + (upgrade2*10) + (upgrade3*100));
    }

    function reset(){
        setClicks(0);
        setUpgrade1(0);
        setUpgrade2(0);
        setUpgrade3(0);
    }

    function Upgrade1(){
        if (clicks >= 10)
        {
            setClicks(clicks - 10);
            setUpgrade1(upgrade1 + 1)
        }
    }
    function Upgrade2(){
        if (clicks >= 100)
        {
            setClicks(clicks - 100);
            setUpgrade2(upgrade2 + 1)
        }
    }
    function Upgrade3(){
        if (clicks >= 1000)
        {
            setClicks(clicks - 1000);
            setUpgrade3(upgrade3 + 1)
        }
    }

    function WinGame(){
        if(clicks >= 1000000){
            router.push('/elgatowin')
        }
    }

    return (
        <>
        <Head>
            <title>Elgato Clicker</title>
        </Head>
        <div className="bg-green-900 text-center">
            <h1 className="text-white">
                Elgato Clicker will be ported here
            </h1>
            <h3 className="text-white">
                Created by Me
            </h3>
            <p className="text-white">this is a website to make epik el gato game</p>
            
            <Image 
                
                width='250'
                height='250'
                src="/elgato.png"
                onClick={handleClick}
                alt="el gato"
                id="elgato"
                
            />

            <p className="text-white">Dabloons: {clicks} </p>

            <p className="text-white">Upgrade 1: {upgrade1} </p>
            <p className="text-white">Upgrade 2: {upgrade2} </p>
            <p className="text-white">Upgrade 3: {upgrade3} </p>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={Upgrade1}> Upgrade 1 costs 10 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={Upgrade2}> Upgrade 2 costs 100 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={Upgrade3}> Upgrade 3 costs 1000 Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={WinGame}> Beat the game - costs 1 million Dabloons </button>
            <br></br>
            <br></br>
            <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={reset}> reset </button>
        </div>
        </>
    )
}

