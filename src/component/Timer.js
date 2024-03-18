import { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isShown, setIsShown] = useState(true) // 타이머 표시 여부를 결정하는 상태

    useEffect(() => {
        // 타이머가 표시될 때만 interval을 생성
        let interval

        // 만약 타이머가 표시되고 있다면
        if (isShown) {
            // 1초마다 seconds 상태를 1씩 증가시키는 interval을 생성
            interval = setInterval(() => {
                console.log('타이머 실행')
                setSeconds((prevSeconds) => prevSeconds + 1)
            }, 1000)
        }

        // 컴포넌트가 언마운트될 때 interval을 제거
        return () => {
            // 만약 타이머가 표시되고 있다면
            if (interval) {
                clearInterval(interval)
                console.log('타이머 중지')
            }
        }
    }, [isShown]) // isShown의 변화에 따라 useEffect를 재실행

    const handleHideTimer = () => {
        setIsShown(false) // 타이머 숨김
        setSeconds(0) // 타이머를 숨길 때 시간을 0으로 초기화 (선택적)
    }

    return (
        <div>
            <h2>useEffect를 이용한 생명주기 모방</h2>
            {isShown ? (
                <div>
                    <p>{seconds}</p>
                    <button onClick={handleHideTimer}>타이머 숨기기</button>
                </div>
            ) : (
                <button onClick={() => setIsShown(true)}>타이머 보이기</button>
            )}
        </div>
    )
}

export default Timer
