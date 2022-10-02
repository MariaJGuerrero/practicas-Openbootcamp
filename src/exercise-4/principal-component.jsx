import { useState } from 'react';
import './principal-component.css'

let interval;

const PrincipalComponent = () => {

    const [color, setColor] = useState()

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

    const getRandomColor = () => {
        let red = getRandomArbitrary(0, 255);
        let green = getRandomArbitrary(0, 255);
        let blue = getRandomArbitrary(0, 255);
        let style = {
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }
        setColor(style)
    }
    
    function changeColor() {
        if (!interval) {
          interval = setInterval(getRandomColor, 1000);
        }
      }

    function stopChangeColor() {
    clearInterval(interval);
    interval = undefined;
    }

    return(
        <div className='principal-container' onMouseOver={() => changeColor()} onMouseLeave={() => stopChangeColor()} onDoubleClick={() => stopChangeColor()} style={color}></div>
    )
}
export default PrincipalComponent;