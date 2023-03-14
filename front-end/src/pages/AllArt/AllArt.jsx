import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myApi from '../../service/service'
import './AllArt.css'



const AllArt = (props) => {

    const [artPieces, setArtPieces] = useState([])

    const artPiece = props.artPiece
    useEffect(() => {

        myApi.get('/art')
            .then((response) => {
                setArtPieces(response.data)
            })
            .catch((e) => console.error(e))
    }, [])

    console.log(artPiece)

    if (!artPieces) {
        return <div className='Loading'>Loading...</div>
    }

    return (
        <div>
            <h3>Gallery</h3>
            {artPieces.length === 0 ? (
                <div>Nothing to view</div>
            ) : (
                <div className='gallery'>
                    {artPieces.map((artPiece) => (
                        <Link key={artPiece._id} className='view-art'>
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

export default AllArt