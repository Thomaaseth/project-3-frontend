import myApi from '../../service/service'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './EditArt.css'



const EditArt = (user) => {


    const [error, setError] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [artist, setArtist] = useState(user.username)

    const params = useParams()
    const navigate = useNavigate()

    console.log(params)
    useEffect(() => {
        myApi
            .getOneArt(params.id)
            .then((res) => {
                console.log(res)
                const { image, description, title, date, artist } = res.data
                setImage(image)
                setDescription(description)
                setTitle(title)
                setDate(date.split("T")[0])
                // setArtist(artist.username)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataToUpdate = { image, description, title, date }

        try {
            const newData = await myApi.updateArt(params.id, dataToUpdate)

            navigate('/my-profile')
        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    }

    const handleCancel = () => {
        navigate('/my-profile')
    }

    const handleDelete = async (event) => {
        try {
            await myApi.deleteArt(params.id)
            navigate('/my-profile')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className='gallery-container'>
            <img src={image} alt="" />
            <form onSubmit={handleSubmit}>
                <label htmlFor='image'>Upload your file</label>
                <div>
                    <input
                        type='file'
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                </div >
                <div>
                    <label htmlFor='title'>Title</label>
                    <div>
                        <input
                            type='text'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div >
                    <label htmlFor='description'>Description: </label>
                    <div>
                        <textarea
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        ></textarea>
                    </div>
                    <label htmlFor='date'>Date</label>
                    <div>
                        <input
                            type='date'
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </div >
                    <label htmlFor='artist'>{user.username}</label>
                    <div>
                        <input
                            type='text'
                            value={artist}
                            readOnly
                        />
                    </div >
                    <button>Update art</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="button" onClick={handleDelete}>Delete</button>

                </div>
            </form>
            <p>{error}</p>
        </div>
    )
}

export default EditArt