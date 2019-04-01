import React, { useState } from 'react'
import { authenticateUser } from '../utils/auth'

const Login = ({ history }) => {

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = () => {
        const user = authenticateUser(data)

        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            history.push('/chat')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input name="username" type="text" value={data.username} onChange={handleChange} />
            <input name="password" type="password" value={data.password} onChange={handleChange} />
            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

export default Login
