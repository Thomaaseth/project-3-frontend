import React, { useState, useEffect, useContext } from 'react'
import myApi from '../../service/service'
import { NavLink, Link } from 'react-router-dom'
import './MyProfile.css'
import { AuthContext } from '../../context/AuthContext'
import MyArtCreated from '../../components/MyArtCreated'
import MyFavourites from '../../components/MyFavourites'

const MyProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2>My Profile</h2>
            <p>Username: {user.username}</p>

            {user.isArtist ? (
                <MyArtCreated />
            ) : (
                <MyFavourites />
            )}
        </div>
    )
}


export default MyProfile