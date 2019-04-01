import users from "../constants/users"

export const authenticateUser = data => {
    const user = users.find(
        existingUser =>
            existingUser.username == data.username
            && existingUser.password == data.password
    )

    return user
}

export const getUser = () => {
    const user = localStorage.getItem('user')

    if (user) {
        return JSON.parse(user)
    }

    return {}
}
