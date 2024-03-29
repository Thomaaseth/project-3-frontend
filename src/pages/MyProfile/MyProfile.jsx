import React, { useState, useEffect, useContext } from 'react'
// import myApi from '../../service/service'
// import { NavLink, Link } from 'react-router-dom'
import './MyProfile.css'
import { AuthContext } from '../../context/AuthContext'
import MyArtCreated from '../../components/MyArtCreated'
import MyFavourites from '../../components/MyFavourites'

const MyProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {user.isArtist ? (
                // if user is artist, access MyArtCreated component
                <MyArtCreated />
            ) : (

                // if Artist = false, access MyFavourites component
                <MyFavourites />
            )}
        </div>
    )
}


export default MyProfile