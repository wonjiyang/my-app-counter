// src/component/TodoList.js
import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState('')
    const onSearch = (e) => {
        setSearch(e.target.value)
    }
    const getSearchTodo = () => {
        return todos.filter((item) => item.task.includes(search))
    }

    return (
        <div style={{ border: '5px solid purple' }}>
            TodoList.jsx
            <h2>할 일 목록 📃</h2>
            <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요" />
            <ul>
                {getSearchTodo().map((item) => (
                    <TodoItem key={item.id} onUpdate={onUpdate} onDelete={onDelete} {...item} />
                ))}
            </ul>
        </div>
    )
}