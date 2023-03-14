import React, { useState, useEffect } from 'react'
import myApi from '../../service/service'
import { NavLink, Link } from 'react-router-dom'
import './MyProfile.css'

const MyProfile = () => {
    const [user, setUser] = useState(null)
    const [artPieces, setArtPieces] = useState([])

    useEffect(() => {
        myApi.get(`/auth/profile`)
            .then((rawResponse) => {
                setUser(rawResponse.data)
            })
            .catch((e) => console.error(e))
    }, [])

    useEffect(() => {
        // if (user) {
        //     myApi.get(`myApi/artPiece?artist=${user._id}`)
        //         .then((rawResponse) => {
        //             setArtPieces(rawResponse.data)
        //         })
        //         .catch((e) => console.error(e))

        // }
    }, [])

    if (!user) {
        return <div className='Loading'>Loading...</div>
    }

    return (
        <div>
            <h2>My Profile</h2>
            <p>Username: {user.username}</p>
            <NavLink to='/add-new-art' className="btn-addNew">Add new piece</NavLink>

            <h3>My art pieces</h3>
            {artPieces.length === 0 ? (
                <div>No art pieces found</div>
            ) : (
                <div className='my-gallery'>
                    {artPieces.map((artPiece) => (
                        <Link key={artPiece._id} to={`/edit-art/${artPiece._id}`} className='edit-art'>
                            <div>
                                <p>Title: {artPiece.title}</p>
                                <img src={artPiece.art} />
                                <p>Date: {artPiece.date}</p>
                                <p>Description: {artPiece.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )
            }

        </div >
    )
}

export default MyProfile