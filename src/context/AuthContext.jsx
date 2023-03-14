import { createContext, useState, useEffect } from 'react'
import myApi from './../service/service'
export const AuthContext = createContext()

function AuthContextWrapper(props) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    function storeToken(receivedToken) {
        localStorage.setItem('token', receivedToken)
        setToken(receivedToken)
    }

    function getToken() {
        return localStorage.getItem('token')
    }

    function removeToken() {
        localStorage.removeItem('token')
    }

    async function authenticateUser() {
        try {
            const currentToken = getToken()
            console.log(currentToken)
            setToken(currentToken)
            if (currentToken) {
                setUser(null)
                setIsLoading(false)
                return
            }
            const response = await myApi.get('/auth/profile')
            setUser(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setUser(null)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])


    return (
        <AuthContext.Provider
            value={{ storeToken, isLoading, user, authenticateUser, removeToken }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextWrapper