import Image from 'next/image'

if (document) document.getElementById('counter');
let clicks: any = 0;
let counter = document.getElementById('counter') as HTMLInputElement;

function handleClick() {
        clicks = clicks + 1;
        counter.value = clicks;
}

function reset() {
        clicks = 0;
        counter.value = clicks;
}

const ElgatoClicker = () => (
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
            
            <p>Counter: <span id="counter"> 0 </span></p>

            <button id="reset" onClick={reset}> reset </button>
        </div>
        </>
    )

export default ElgatoClicker
