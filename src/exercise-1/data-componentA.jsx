import IsConectedComponent from "./is-conected-componentB"
import { Data } from "./data-class"


const DataComponent = () => {
    const defaultContact = new Data('Pepe', 'Torres', 'pepemail@torres.com', true)
    return(
        <div>
            <p>
                Name: { defaultContact.name}
            </p>
            <p>
                Lastname: {defaultContact.lastname}
            </p>
            <p>
                Email: {defaultContact.email}
            </p>
            <IsConectedComponent conected = {defaultContact.conected}/>
        </div>
    )
}


export default DataComponent;