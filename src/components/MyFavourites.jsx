import React, { useState, useEffect, useContext } from 'react'
import myApi from '../service/service'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const MyFavourites = () => {
    const [favourites, setFavourites] = useState(null)
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
            await myApi.delete(`/favourites/${id}`);
            const updatedFavourites = favourites.filter((favourite) => favourite._id !== favouriteId);
            setFavourites(updatedFavourites);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        myApi.get(`/favourites`)
            .then((response) => {
                setFavourites(response.data.allFavourites)
            })
            .catch((e) => console.error(e))
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
                        <Link key={artPiece._id} to={`/art/${artPiece._id}`} className='favourite-art'>
                            <div>
                                <p>Title: {artPiece.title}</p>
                                <img src={artPiece.image} />
                                <p>Date: {artPiece.date.split("T")[0]}</p>
                                <p>Description: {artPiece.description}</p>
                                <button onClick={() => handleRemoveFavourite(artPiece.id)}>Remove from favourites</button>

                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyFavourites
