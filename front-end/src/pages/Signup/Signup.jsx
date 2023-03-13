import React, { useState } from 'react'
import myApi from './../../service/service'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [{ email, username, password, isArtist }, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        isArtist: false,
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleChange(event) {
        const updatedState = {
            email,
            username,
            password,
            isArtist,
            [event.target.id]: event.target.checked,
        }
        setFormData(updatedState)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const userToCreate = { email, username, password, isArtist }

        console.log(userToCreate)

        try {
            const response = await myApi.post('/api/auth/signup', userToCreate)
            if (response.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    }




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">
                    Email:&nbsp;
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="username">
                    Username:&nbsp;
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    Password:&nbsp;
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="isArtist">
                    Artist:&nbsp;
                    <input
                        type="checkbox"
                        id="isArtist"
                        value={isArtist}
                        onChange={handleChange}
                    />
                </label>
            </div>
            {/* &copy;This webise is &gt; > now clearly mine */}
            {error && error.length > 0 && <p className="error">{error}</p>}
            <button>Signup</button>
        </form>
    )

}

