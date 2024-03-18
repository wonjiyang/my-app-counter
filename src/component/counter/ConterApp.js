import React, { useEffect, useState } from 'react'
import Controller from './Controller'
import Viewer from './Viewer'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const handleSetCount = (value) => {
        setCount(count + value)
    }

    const changeText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        console.log('업데이트', count, text)
    }, [count, text])

    return (
        <div>
            <h2>Counter App 만들기</h2>
            <Viewer count={count} />
            <input type="text" value={text} onChange={changeText} />
            <Controller handleSetCount={handleSetCount} />
        </div>
    )
}

export default CounterApp
