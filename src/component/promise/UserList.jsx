// src/UsersList.js
import React, { useState, useEffect } from 'react'
import { Box, List, ListItem, ListIcon, Heading } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

function UsersList() {
    // useState() : 컴포넌트의 상태를 관리하는 함수
    // const [상태변수, 상태변수를 변경할 수 있는 함수] = useState(초기값)
    // [] : 배열 비구조화 할당
    const [users, setUsers] = useState([])

    // useEffect(콜백함수, [의존성배열]) : 컴포넌트가 처음 렌더링될 때만 실행
    useEffect(() => {
        // fetch() : 네트워크 요청을 보내는 함수
        fetch('https://jsonplaceholder.typicode.com/users')
            // .then() : 비동기 처리가 성공했을 때 실행할 코드를 작성하는 함수
            // response.json() : JSON 형식의 데이터를 자바스크립트 객체로 변환하는 함수
            // 예를 들어, API로부터 {"name": "Alice", "age": 30} 형태의 JSON 데이터를 받았다면,
            // response.json()을 호출하여 이 데이터가 자바스크립트 객체 {name: "Alice", age: 30}으로 변환됩니다.
            // 이렇게 변환된 객체는 자바스크립트 코드 내에서 쉽게 접근하고 조작할 수 있게 됩니다.
            .then((response) => response.json())
            // data : JSON 형식의 데이터
            // setUsers(data) : users 상태변수를 변경하여 users 상태변수에 data를 저장
            .then((data) => setUsers(data))
            // .catch() : 비동기 처리가 실패했을 때 실행할 코드를 작성하는 함수
            .catch((error) => console.error(error))
    }, [])

    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading mb={4}>Users</Heading>
            <List spacing={3}>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {user.name}
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default UsersList
