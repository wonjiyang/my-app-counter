import React, { useState, useRef } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'

const mockTodo = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥주기',
        createdDate: new Date().getTime(), // 현재 시간
    },
    {
        id: 2,
        isDone: false,
        task: '감자 캐기',
        createdDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        task: '고양이 놀아주기',
        createdDate: new Date().getTime(),
    },
]

function TodoApp2() {
    const [todo, setTodo] = useState(mockTodo)
    const idRef = useRef(4)

    const addTodo = (task) => {
        const newTodo = {
            id: idRef.current++, // id는 1씩 증가하는 숫자로 설정합니다.
            isDone: false,
            task,
            createdDate: new Date().getTime(),
        }
        setTodo([newTodo, ...todo])
    }

    const onUpdate = (id) => {
        // id에 해당하는 할 일의 isDone을 변경합니다.
        setTodo(
            // map을 이용하여 todo 배열을 순회하면서 id에 해당하는 할 일의 isDone을 변경합니다.
            todo.map((it) => (it.id === id ? { ...it, isDone: !it.isDone } : it))
        )
    }

    return (
        <div>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList todo={todo} onUpdate={onUpdate} />
        </div>
    )
}

export default TodoApp2
