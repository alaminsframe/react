import {useState} from 'react'

const UserList = () => {
    const [users, setUsers] = useState([{
        id: crypto.randomUUID(), 
        name: 'John Doe',
        address: 'New York',

    }])

    const changeUser = (id, name) => {
        const newUsers = [...users];
        const foundUser = newUsers.find( (user) => user.id === id );
        if (foundUser) {
            foundUser.name = name;
        } 
        setUsers(newUsers);
    }
    return (
        <div>
            <ul>
                {
                    users.map((user) =>(
                        <li key={user.id} className='flex gap-4 items-center'>
                            <p className='text-2xl'>
                                {user.name}
                            </p>
                            <button
                                onClick = {() => changeUser(user.id, 'Random')}
                                className='border text-white px-1.5 py-1 rounded-md'
                            >
                                Change User
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList
