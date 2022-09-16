import { useState, useEffect } from "react"

const nombre = 'Martín';
const apellido = 'San José';

const Clock2 = () => {

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);

    useEffect(() => {
        const timerID = setInterval (
            () => {
                setFecha(new Date())
                setEdad(edad + 1)
               
            }, 1000
        );

        return () => {
            clearInterval (timerID);
        }
    }, )

    

    return(
        <div>
            <h2>
                Hora Actual:
                {fecha.toLocaleTimeString()}
            </h2>
            <h3>{nombre} {apellido}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    )
}
export default Clock2;