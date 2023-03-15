import React from 'react'
import { Link } from 'react-router-dom'

const ArtCard = ({ image, title, description, date, artist }) => {

    return (
        <div>
            <h3>{artPiece.Title}</h3>
            <img src={artPiece.image} />
            <p>{artPiece.description}</p>
            <p>{artPiece.date}</p>
            <p>{artPiece.artist}</p>
            <Link to={`/art/:id`}></Link>
        </div>
    )
}

export default ArtCard