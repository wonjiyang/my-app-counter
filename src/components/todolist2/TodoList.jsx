// src/component/TodoList.js
import React, { useState } from 'react'
import TodoItem from '../todolist/TodoItem'

export default function TodoList({ todo, onUpdate }) {
    const [search, setSearch] = useState('')

    // input에 입력된 검색어를 상태로 관리합니다.
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    // 검색어를 포함하는 할 일 목록을 저장합니다.
    const getSearchTodo = () => {
        return todo.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <div style={{ border: '5px solid orange' }}>
            TodoList.jsx
            <h2>할 일 목록 📃</h2>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <ul>
                {getSearchTodo().map((item) => (
                    // <div>{item.task}</div>
                    // <li key={id}>
                    //     <input type="checkbox" checked={isDone} />
                    //     <span>{task}</span>
                    //     <span>{new Date(createdDate).toLocaleDateString()}</span>
                    //     <button>삭제</button>
                    // </li>
                    // ...item은 item 객체의 모든 속성을 TodoItem 컴포넌트에 전달합니다.
                    <TodoItem key={item.id} onUpdate={onUpdate} {...item} />
                ))}
            </ul>
        </div>
    )
}
