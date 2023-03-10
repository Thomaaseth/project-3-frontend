import myApi from '../../service/service'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditArt = (user) => {

    const [art, setArt] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [artist, setArtist] = useState(user.username)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        myApi
            .getOneArt(params.artId)
            .then((res) => {
                setArt(res.data.oneArt.art)
                setDescription(res.data.oneArt.description)
                setTitle(res.data.oneArt.title)
                setDate(res.data.oneArt.date)
                setArtist(res.data.oneArt.artist)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const artToUpdate = { art, description, title, date, artist }

        try {
            const newArt = await myApi.updateArt(params.artId, artToUpdate)

            if (newArt.status === 202) {
                navigate('/gallery')
            }
            console.log(newArt)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='art'>Upload your file</label>
            <div>
                <input
                    type='file'
                    onChange={(event) => setArt(event.target.files[0])}
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
                <button>Submit art</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default EditArt