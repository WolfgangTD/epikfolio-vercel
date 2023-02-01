import Script from 'next/script'
import Image from 'next/image'

var clicks = 0;

function ElgatoClicker() {
    function handleClick() {
        clicks = clicks + 1;
        counter.innerHTML = clicks;
        
    }

    function reset(){
        clicks = 0;
        counter.innerHTML = clicks;
    }
return(
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
        />
        
        <p>Counter: <span id="counter"> 0 </span></p>

    </div>
    )
}

export default ElgatoClicker
