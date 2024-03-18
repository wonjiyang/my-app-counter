const Event = () => {
    const handleClick = (event) => {
        console.log('버튼이 클릭되었습니다.')
        // alert('버튼이 클릭되었습니다.')
        console.log(event) // 이벤트 객체
        console.log(event.target) // 이벤트가 발생한 DOM 요소
        console.log(event.type) // 이벤트 타입
    }

    const handleMouseOver = (event) => {
        event.target.style.backgroundColor = 'lightgray'
    }

    const handleChange = (e) => {
        document.querySelector('.text-value').innerText = e.target.value
    }

    return (
        <>
            <h1>클릭 이벤트</h1>
            <button onClick={handleClick}>버튼</button>

            <h1>마우스 오버 이벤트</h1>
            <div onMouseOver={handleMouseOver}>마우스 오버시 배경색 변함</div>

            <h1>입력 이벤트</h1>
            <input onChange={handleChange} type="text" placeholder="placeholder" />
            <div className="text-value"></div>
        </>
    )
}

export default Event
