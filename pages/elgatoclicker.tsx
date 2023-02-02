import Image from 'next/image'

let clicks: any = 0;
let counter = document.getElementById('counter') as HTMLInputElement;

function handleClick() {
    if (typeof window !== "undefined") {
        clicks = clicks + 1;
        counter.value = clicks;
    }
}

function reset(){
    if (typeof window !== "undefined"){
        clicks = 0;
        counter.value = clicks;
    }
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


// pages/blog.js
import { loadElgato } from '../lib/load-elgato'

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const elgato = await loadElgato()

  // Props returned will be passed to the page component
  return { props: { elgato } }
}
export default ElgatoClicker
