import UserCard from './UserCard'

const UserCardList = (props) => {
    const { users } = props;
    console.log("Props: ", props)
    return (
        <ul>
            {users.map((user, index) => (
                    <UserCard user={user} key={index} />
            ))};
        </ul>
    );
}

export default UserCardList;