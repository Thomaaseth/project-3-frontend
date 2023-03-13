import React, { useState, useEffect } from 'react'
import myApi from '../../service/service'

const MyProfile = (userId) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        myApi.get(`api/auth/profile`)
            .then((rawResponse) => {
                setUser(rawResponse.data)
            })
            .catch((e) => console.error(e))
    }, [])

    if (!user) {
        return <div className='Loading'>Loading...</div>
    }

    return (
        <div>
            <h2>My Profile</h2>
            <p>Username: {user.username}</p>
        </div>
    )
}

export default MyProfile