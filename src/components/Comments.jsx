import Comment from './Comment'

const Comments = () => {
    const usersArr = [
        {
            name: '겨울이',
            img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: '겨울이 프사',
        },
        {
            name: '가을이',
            img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: '가을이 프사',
        },
    ]
    const commetsArr = [
        {
            user: usersArr[0], // 겨울이
            text: '봄이 왔다. 나가고 싶다. 하지만 나갈 수 없다. 난 고양이니까...',
            date: '2024.03.11',
        },
        {
            user: usersArr[1], // 가을이
            text: '봄이 왔다. 맛있는걸 먹고 싶다. 하지만 입맛이 까다로워서 아무거나 먹을 수 없다.',
            date: '2024.03.14',
        },
        {
            user: usersArr[0], // 겨울이
            text: '겨울이 왔다. 나가고 싶아러ㅏ어라머아러ㅏㅁ어라어',
            date: '2024.12.11',
        },
        {
            user: usersArr[1], // 가을이
            text: '가을이 왔ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
            date: '2024.11.14',
        },
    ]
    return (
        <>
            {commetsArr.map((item, index) => (
                <Comment key={index} data={item} />
            ))}
        </>
    )
}

export default Comments
