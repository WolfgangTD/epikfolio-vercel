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

var ElgatoClicker = () => (
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
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('/elgato.png')
    const elgato = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        elgato,
      },
    }
  }
export default ElgatoClicker
