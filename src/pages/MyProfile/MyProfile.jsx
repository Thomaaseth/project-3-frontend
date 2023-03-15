import React, { useState, useEffect, useContext } from 'react'
import myApi from '../../service/service'
import { NavLink, Link } from 'react-router-dom'
import './MyProfile.css'
import { AuthContext } from '../../context/AuthContext'

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const [artPieces, setArtPieces] = useState(null)


    useEffect(() => {
        myApi.get('/art/mine')
            .then((response) => {
                setArtPieces(response.data)
            })
            .catch((e) => console.error(e))

    }, [])


    if (!artPieces) {
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
                <div className='gallery-container'>
                    {artPieces.map((artPiece) => (
                        <Link key={artPiece._id} to={`/edit-art/${artPiece._id}`} className='edit-art'>
                            <div>
                                <p>Title: {artPiece.title}</p>
                                <img src={artPiece.image} />
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