import React, { useState } from 'react'
import { getUser } from '../utils/auth'

const Chat = () => {

    const [message, setMessage] = useState('')

    let user = getUser()

    return (
        <div>
            <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
        </div>
    )

}

export default Chat
