import {useState} from 'react'

const UserList = () => {
    const [users, setUsers] = useState([{
        id: crypto.randomUUID(), 
        name: 'John Doe',
        address: 'New York',

    }])

    const changeUser = (id, name) => {
        const userCopy = [...users];
        const foundUser = userCopy.find( (user) => user.id === id );
        if (foundUser) {
            foundUser.name = name;
        } 
        setUsers(userCopy);
    }

    const addUser = () => {
        const newUser = {
            id: crypto.randomUUID(),
            name: 'Jhon Le',
            address: 'Los Angeles',
        }
        setUsers([...users, newUser]);
        console.log(users);
        
    }

    return (
        <div>
            <ul className='flex flex-col gap-4'>
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

            <button
                onClick = {addUser}
                className='bg-cyan-600 text-white px-1.5 py-1 rounded-md'
            >
                Add User
            </button>
        </div>
    )
}

export default UserList
