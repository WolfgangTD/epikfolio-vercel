import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

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
            setUpgrade1(upgrade2 + 1)
        }
    }
    function Upgrade3(){
        if (clicks >= 1000)
        {
            setClicks(clicks - 1000);
            setUpgrade1(upgrade3 + 1)
        }
    }

    function WinGame(){
        if(clicks >= 1000000){
            router.push('/elgatowin')
        }
    }

    return (
        <>
        <div>
            <h1>
                Elgato Clicker will be ported here
            </h1>
            <h3>
                Created by Me
            </h3>
            <p>this is a website to make epik el gato game</p>
            <Image
                src="/elgato.png"
                width='400'
                height='400'
                onClick={handleClick}
                alt="el gato"
            />
            
            <p>Dabloons: <span id="counter"> {clicks} </span></p>

            <p>Upgrade 1: {upgrade1}</p>
            <p>Upgrade 2: {upgrade2}</p>
            <p>Upgrade 3: {upgrade3}</p>

            <button onClick={Upgrade1}> Upgrade 1 costs 10 Dabloons </button>
            <button onClick={Upgrade2}> Upgrade 2 costs 100 Dabloons </button>
            <button onClick={Upgrade3}> Upgrade 3 costs 1000 Dabloons </button>

            <button onClick={WinGame}> Beat the game - costs 1 million Dabloons </button>

            <button id="reset" onClick={reset}> reset </button>
        </div>
        </>
    )
}

