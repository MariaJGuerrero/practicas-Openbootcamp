import './style-chuck.css'
import { useState } from 'react'
import { GetJokes } from './services';

const IndexChuck = () => {

    const [joke, setJoke] = useState()
    const [image, setImage] = useState()
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const gettingNewJoke = () => {
        GetJokes().then((response) => {
            setJoke(response.value)
            setImage(response.icon_url)
        })
    }
   /* let warningMessage = '';
    const noFunction = () => {
        if(!joke){
            warningMessage =  <p>you must click YES or Chuck Norris will appear to you in the night!'</p>
            console.log(warningMessage)
        }else{
            warningMessage = undefined
        }
    }*/

    const countingLikes = () => {
        let totalCount = setLikes(likes + 1)
        return totalCount
    }
    
    const countingDislikes = () => {
        let totalCount = setDislikes(dislikes + 1)
        return totalCount
    }

    return (
        <div>
            <h1>Do you want a Chuck Norris Joke?</h1>
            <button onClick={gettingNewJoke}>YES</button>
            <button onClick={() => <p>you must click YES or Chuck Norris will appear to you in the night!</p>}>NO</button>
            <div>
                <h3>{joke}</h3>
                <img src={image} alt="" />
            </div>
            {joke ?
                <div>
                    <button onClick={() => countingLikes()}>like</button> 
                    <button onClick={() => countingDislikes()}>dislike</button>
                    <p>this joke has {likes} likes and {dislikes} dislikes</p>
                </div>
             : undefined
            }
        </div>
    )
}

export default IndexChuck;