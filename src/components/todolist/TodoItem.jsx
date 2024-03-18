// 할 일 아이템의 수정 및 삭제

const TodoItem = ({ id, isDone, task, createDate, onUpdate, onDelete }) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} onChange={() => {onUpdate(id)}} readOnly />
            <span style={{textDecoration: isDone ? 'line-through' : 'none'}}>{task}</span>
            <span>{new Date(createDate).toLocaleDateString()}</span>
            <button onClick={() => onDelete(id)}>삭제</button>
        </li>
    )
}
export default TodoItem