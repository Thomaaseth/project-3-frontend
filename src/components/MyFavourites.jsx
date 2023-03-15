import React, { useState, useEffect, useContext } from 'react'
import myApi from '../service/service'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const MyFavourites = () => {
    const [favourites, setFavourites] = useState(null)
    const { user } = useContext(AuthContext)


    useEffect(() => {
        myApi.get(`/${user._id}`)
            .then((response) => {
                setFavourites(response.data)
            })
            .catch((e) => console.error(e))
    }, [user])

    if (!favourites) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>My Favourites</h2>
            <p>Username: {user.username}</p>

            <h3>My favourite art pieces</h3>
            {favourites.length === 0 ? (
                <div>No favourites found</div>
            ) : (
                <div className='gallery-container'>
                    {favourites.map((favourite) => (
                        <Link key={favourite._id} to={`/art/${artPiece._id}`} className='favourite-art'>
                            <div>
                                <p>Title: {artPiece.title}</p>
                                <img src={artPiece.image} />
                                <p>Date: {artPiece.date.split("T")[0]}</p>
                                <p>Description: {artPiece.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyFavourites
