import { useState } from "react"

const Home = () => {

    const [a, setA] = useState('mario')
    const [b, setB] = useState(25)
    
    const handleClick = () => {
        setA('C')
        setB(654)
    }


    return( 
        <>
            <p>......{a}......{b}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default Home