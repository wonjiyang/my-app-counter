import { useState, useRef } from 'react'

const TodoEditor = ({ addTodo }) => {
    // 할 일을 입력하는 input 상태를 관리합니다.
    const [task, setTask] = useState('')
    // inputRef 변수가 useRef()로 생성됩니다.
    // onclick 이벤트가 발생하면 inputRef.current.focus()를 호출하여 input에 포커스를 맞춥니다.
    // inputRef.current는 input 요소가 할당되어, inputRef는 input 요소를 가리킵니다.
    const inputRef = useRef()

    // input에 할 일이 입력되면 입력한 값을 task 상태에 업데이트하는 함수를 만듭니다.
    const onChangeTask = (e) => setTask(e.target.value)

    // 추가 버튼을 클릭하면 할 일을 추가하는 함수를 호출합니다.
    const onSubmit = () => {
        // 할 일이 입력되지 않았다면 input에 포커스를 맞춥니다.
        if (!task) {
            inputRef.current.focus()
            return
        }
        // 할 일을 추가하는 함수를 호출합니다.
        addTodo(task)
        setTask('')
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div className="TodoEditor">
            <h2>새로운 Todo 작성하기 ✏ </h2>
            <div>
                {/* inputRef를 input 요소에 연결합니다. */}
                <input
                    ref={inputRef}
                    value={task}
                    onChange={onChangeTask}
                    onKeyDown={onKeyDown}
                    placeholder="할 일을 추가로 입력해주세요."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor
