const User = ({ user }) => {
    // const { user } = props

    return (
        <>
            <img src={user.img} alt={user.alt} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <strong>{user.name}</strong>
        </>
    )
}

export default User
