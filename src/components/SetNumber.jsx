import { useState } from 'react'

const SetNumber = () => {
    const [number, setNumber] = useState(0)

    // const increase = () => {
    //     setNumber(number + 1)
    // }
    // const decrease = () => {
    //     setNumber(number - 1)
    // }

    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(number + 1)
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setNumber(number - 1)
                }}
            >
                -
            </button>
        </div>
    )
}

export default SetNumber
