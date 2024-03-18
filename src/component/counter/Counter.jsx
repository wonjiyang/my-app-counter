import React, { useEffect, useRef, useState } from 'react'
import Viewer from './Viewer'
import Controller from './Controller'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const handleSetCount = (value) => {
        setCount(count + value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const didMountRef = useRef(false) // useRef() : 컴포넌트가 처음 렌더링될 때만 실행

    // useEffect(콜백함수, [의존성배열]) : 컴포넌트가 처음 렌더링될 때만 실행
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            return
        } else {
            console.log('업데이트될 때만 실행')
        }
    })

    return (
        <div>
            <input type="text" value={text} onChange={handleChangeText} />

            <Viewer count={count} />
            <Controller handleSetCount={handleSetCount} />
        </div>
    )
}

export default Counter
