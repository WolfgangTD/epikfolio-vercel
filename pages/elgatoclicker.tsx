import Image from 'next/image'
import React from 'react'

export default function ElgatoClicker() {

    const [clicks, setClicks] = React.useState(0);
    
    function handleClick(){
        setClicks(clicks + 1)
    }

    function reset(){
        setClicks(0)
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
            
            <p>Counter: <span id="counter"> {clicks} </span></p>

            <button id="reset" onClick={reset}> reset </button>
        </div>
        </>
    )
}

