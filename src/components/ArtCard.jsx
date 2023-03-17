import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myApi from '../service/service'




const ArtCard = (props) => {
    const [artPieces, setArtPieces] = useState([])

    const [successAddedFavourite, setSuccessAddedFavourite] = useState(false)

    const handleAddFavourite = async (artPieceId) => {
        try {
            const response = await myApi.addFavourite(artPieceId);
            setSuccessAddedFavourite(true)
        } catch (error) {
            console.log(error);
        }
    }

    const artPiece = props.artPiece
    useEffect(() => {
        myApi.get('/art')
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
            <h3>Gallery</h3>
            {artPieces.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div className='gallery-container'>
                    {artPieces.map((artPiece) => (
                        <Link key={artPiece._id} className='view-art'>
                            <div>
                                <p>Title: {artPiece.title}</p>
                                <img src={artPiece.image} />
                                <p>Date: {artPiece.date.split("T")[0]}</p>
                                <p>Description: {artPiece.description}</p>
                                <button onClick={() => handleAddFavourite(artPiece._id)}>Add to Favourites</button>

                            </div>
                        </Link>

                    ))}
                </div>
            )
            }
            {successAddedFavourite && (
                <div>
                    <p>Successfully added as favourite!</p>
                </div>
            )
            }
        </div>
    )

}

export default ArtCard