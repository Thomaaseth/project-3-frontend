import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import myApi from '../../service/service'

const Art = () => {

    const [art, setArt] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        myApi
            .getOneArt(params.artId)
            .then((res) => setArt(res.data.OneArt))
            .catch((e) => console.error(e))
    }, [])

    const handleClick = async () => {
        try {
            await myApi.deleteArt(params.artId)
            navigate('/gallery')
        } catch (error) {
            console.error(error)
        }
    }
    if (!art) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div>
            <h2>{ }</h2>
        </div>
    )
}

export default Art