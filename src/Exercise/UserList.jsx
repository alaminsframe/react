import {useState} from 'react'

const UserList = () => {
    const [users, setUsers] = useState([{
        id: crypto.randomUUID(), 
        name: 'John',
        address: 'New York',

    }])
    return (
        <div>
            
        </div>
    )
}

export default UserList
