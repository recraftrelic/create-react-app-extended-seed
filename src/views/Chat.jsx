import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { getUser } from '../utils/auth'
import users from '../constants/users';

let socket = null

const ChatWindow = ({ activeChatUser }) => {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    let user = getUser()

    useEffect(() => {
        socket = io('http://localhost:8080')
        socket.emit('newConnection', user)
        socket.on('receivedMessage', appendMessages)
    }, [])

    const appendMessages = data => {
        setMessages(prevMessages => {
            const updatedMessages = prevMessages.concat(data)
            return updatedMessages
        })
    }

    const sendMessage = () => {

        const updatedMessages = messages.concat({
            author: user.username,
            content: message,
            to: activeChatUser.username
        })

        setMessages(updatedMessages)
        setMessage('')

        if (socket) {
            socket.emit('sendMessage', {
                author: user.username,
                content: message,
                to: activeChatUser.username
            })
        }
    }


    return (
        <div className="col-9 chat-window">
            <div class="message-header">
                <h2>{activeChatUser.username}</h2>
            </div>
            <div className="message-list">
                {
                    messages.map(
                        (message, index) => (
                            <div key={index} className={`message-bubble-container ${user.username == message.author ? 'right' : 'left'}`}>
                                <div class="alert alert-light message-bubble">
                                    {message.content}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <div class="input-group message-box">
                <textarea onChange={e => setMessage(e.target.value)} value={message} class="form-control message-input" placeholder="Write your message..."></textarea>
                <div class="input-group-append" onClick={sendMessage}>
                    <span class="input-group-text send-icon-container">
                        <i class="fas fa-paper-plane"></i>
                    </span>
                </div>
            </div>
        </div>
    )

}

const Chat = () => {

    const [activeChatUser, setActiveChatUser] = useState(null)

    return (
        <div className="chat-container full-height container-fluid">
            <div className="row full-height">
                <aside className="users-list col-3">
                    <ul className="list-group">
                        {
                            users.map(
                                (user, index) =>
                                    <li
                                        key={index}
                                        onClick={() => setActiveChatUser(user)}
                                        className={`list-group-item user ${activeChatUser && activeChatUser.username == user.username ? 'selected' : ''}`}
                                    >
                                        <i class="fas fa-user-circle user-profile-photo"></i>
                                        <span className="username">{user.username}</span>
                                    </li>
                            )
                        }
                    </ul>
                </aside>
                { activeChatUser ? 
                    <ChatWindow
                        activeChatUser={activeChatUser}
                    />
                : null }
            </div>
        </div>
    )

}

export default Chat
