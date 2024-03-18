import { useState } from 'react'

const State = () => {
    // js
    // let name = '겨울'

    // const changeName = () => {
    //     // 삼항연산자
    //     //  조건 ? 참일때 : 거짓일때
    //     name = name === '겨울' ? '가을' : '겨울'
    //     console.log(name)

    //     // h1태그에 .innerText 이용해서 name 출력
    //     // element.innerText = text
    //     document.querySelector('h1').innerText = name
    // }

    // react
    // useState: 상태값을 저장할 수 있는 변수를 생성하는 함수
    // const [상태이름, 상태변경함수] = useState(상태의 초기값)

    const [name, setName] = useState('겨울')

    const changeName = () => {
        // setName: 상태변경함수
        // 상태변경함수(상태값)
        // 상태값을 변경하면 컴포넌트가 다시 렌더링된다.
        setName(name === '겨울' ? '가을' : '겨울')
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>이름 바꾸기</button>
        </div>
    )
}

export default State
