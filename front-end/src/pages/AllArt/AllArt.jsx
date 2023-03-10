import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const AllArt = (props) => {

    const [allArt, setAllArt] = useState(null)

    const artPiece = props.artPiece
    useEffect(() => {
        fetch('/myApi/art')
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setAllArt(response)
            })
            .catch((e) => console.error(e))
    }, [])

    console.log(allArt)

    if (!allArt) {
        return <div className='Loading'>Loading...</div>
    }

    return (
        <div>
            {allArt.map((artPiece) => {
                return <div className='ListOfArtPieces' key={artPiece._id}>
                    <li><Link to={`/art/${artPiece._id}`}>{artPiece.title}</Link></li>
                    <img src={artPiece.art} />
                    <li>{artPiece.date}</li>
                    <li>{artPiece.description}</li>
                    <li>{artPiece.artist}</li>
                </div>
            })}
        </div>
    )
}

export default AllBeers