// 할 일 아이템의 수정 및 삭제

const TodoItem = ({ id, isDone, task, createDate }) => {
    // props = { id: 1, isDone: false, task: '고양이 밥주기',  createDate: '2024.03.11' }

    // const { id, isDone, task, createDate } = props
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} readOnly />
            <span>{task}</span>
            <span>{new Date(createDate).toLocaleDateString()}</span>
            <button>삭제</button>
        </li>
    )
}
export default TodoItem
