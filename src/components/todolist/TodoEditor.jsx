import React, { useState } from 'react'

export default function TodoEditor({ addTodo }) {
    const [task, setTask] = useState('')

    const onChangeTask = (e) => {
        setTask(e.target.value)
    }
    const onSubmit = () => {
        addTodo(task)
    }

    return (
        <div style={{ border: '5px solid red' }}>
            TodoEditor.jsx
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                <input value={task} onChange={onChangeTask} placeholder="할 일을 추가로 입력해주세요." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
