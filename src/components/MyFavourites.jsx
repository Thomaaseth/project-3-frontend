import React, { useState, useEffect, useContext } from 'react'
import myApi from '../service/service'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const MyFavourites = (props) => {
    const [favourites, setFavourites] = useState(null)
    // const [artPieces, setArtPieces] = useState([])
    const { user } = useContext(AuthContext)

    console.log(favourites)

    // const handleAddFavourite = async (artPieceId) => {
    //     try {
    //         const response = await myApi.addFavourite(artPieceId);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleRemoveFavourite = async (artPieceId) => {
        try {
            const response = await myApi.delete(`/favourites/${artPieceId}`);
            fetchFavourites()
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFavourites = () => {
        myApi.get(`/favourites`)
            .then((response) => {
                setFavourites(response.data.allFavourites)
            })
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        fetchFavourites()
    }, [user])

    if (!favourites) {
        return <div>Loading...</div>
    }



    return (
        <div>
            <h2>My Profile</h2>
            <p>Username: {user.username}</p>

            <h3>My favourite art pieces</h3>
            {favourites.length === 0 ? (
                <div>No favourites found</div>
            ) : (
                <div className='gallery-container'>
                    {favourites.map(({ artPiece }) => (
                        <div key={artPiece._id} className='favourite-art'>
                            <Link to={`/art/${artPiece._id}`} >
                                <p>Title: {artPiece.title}</p>
                            </Link>
                            <img src={artPiece.image} />
                            <p>Date: {artPiece.date.split("T")[0]}</p>
                            <p>Description: {artPiece.description}</p>
                            <button onClick={() => handleRemoveFavourite(artPiece._id)}>Remove from favourites</button>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyFavourites
