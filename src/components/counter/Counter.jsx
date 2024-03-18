import React from 'react'

function Counter({ setCount }) {
    const increase = () => {
        setCount((prev) => prev + 1)
    }
    return (
        <div>
            <button
                onClick={() => {
                    setCount((prev) => prev - 1)
                }}
            >
                -
            </button>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter
