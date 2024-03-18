import React, { useRef, useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'

const mockTodo = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥 주기',
        createDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        task: '고양이 감자 캐기',
        createDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        task: '고양이 꾹꾹이 받기',
        createDate: new Date().getTime(),
    },
]

function TodoApp() {
    // useState로 todos 상태를 관리합니다.
    const [todos, setTodos] = useState(mockTodo)

    const idRef = useRef(4)

    // 할 일을 추가하는 함수
    const addTodo = (task) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            task,
            createDate: new Date().getTime(),
        }
        setTodos([newTodo, ...todos])
    }

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoApp