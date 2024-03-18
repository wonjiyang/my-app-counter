import React, { useEffect, useRef, useState } from 'react'
import TodoApp from './components/todolist/TodoApp'
import SignUp from './SignUp'
import CounterApp from './component/counter/ConterApp'

function App() {
    const [user, setUser] = useState({
        name: '',
        gender: '',
        age: '',
        intro: '',
    })
    const [count, setCount] = useState(0)
    const didMountRef = useRef(false)

    useEffect(() => {
        if (!didMountRef.current) {
            // 마운팅 시
            didMountRef.current = true
            return
        } else {
            // 업데이트 시
            console.log('업데이트')
        }
    })

    return (
        <div>
            <TodoApp />
            <br />
            <hr />
            <br />
            {/* <Timer /> */}
            <h2>useEffect</h2>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                1씩 증가
            </button>

            <CounterApp />
            <br />
            <hr />
            <br />
            <SignUp user={user} setUser={setUser} />
            <br />
            <hr />
            <br />
        </div>
    )
}

export default App