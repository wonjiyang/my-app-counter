import User from './User'

const Comment = (props) => {
    const { user, text, date } = props.data

    // console.log(`props : ${props}`) // props : [object Object]
    // console.log(`props.data : ${props.data}`) // props.data : [object Object]
    return (
        <div className="comment">
            <User user={user} />
            <p>{text}</p>
            <time>{date}</time>
        </div>
    )
}

export default Comment
