import { useState } from 'react'

const Header = (props) => {
    console.log(props) // {title: "헤더", cont: "헤더 내용"}
    // const props = {title: "헤더", cont: "헤더 내용"}
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.cont} 컴포넌트 입니다.</p>
        </>
    )
}

const Body = ({ title, cont }) => {
    // const { title, cont } = props

    const handleClick = (e) => {
        console.log(e.target.name)
    }
    return (
        <>
            <button name="확인" onClick={handleClick}>
                확인
            </button>
            <button name="취소" onClick={handleClick}>
                취소
            </button>

            <h1>{title}</h1>
            <p>{cont} 컴포넌트 입니다.</p>
        </>
    )
}

const Arrangement = () => {
    const user = {
        name: 'John',
        age: 20,
    }
    const num = 9
    const arr = [1, 2, 3, 4, 5]

    const clickOn = () => {
        alert('버튼을 눌렀습니다.')
    }

    // const [상태값, 상태를 변경하는 함수] = useState(초기값)
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <Header title="헤더" cont="헤더 내용" />
            <Body title="바디" cont="바디 내용" />

            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                1씩 증가
            </button>

            <button
                onClick={() => {
                    setCount(0)
                }}
            >
                초기화
            </button>

            <div>
                {arr.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>

            <p>
                {user.name}의 나이는 {user.age}살 입니다.
            </p>
            <p>나는 {arr[2]}살입니다.</p>
            <p>
                {num}은 {num % 2 === 0 ? '짝수' : '홀수'} 입니다.
            </p>
            <p>
                {num}은 {num % 2 === 0 && num > 10 ? '짝수&2자리' : '거짓'} 입니다.
            </p>
            <p>
                {num}은 {num % 2 === 0 || num > 10 ? '짝수or2자리' : '거짓'} 입니다.
            </p>
        </div>
    )
}

export default Arrangement
