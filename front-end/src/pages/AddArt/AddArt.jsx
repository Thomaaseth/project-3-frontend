import myApi from '../../service/service'
import React, { useState } from 'react'

const AddArt = (user) => {

    const [art, setArt] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [artist, setArtist] = useState(user.username)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const artToCreate = { art, description, title, date, artist }
        try {
            const response = await myApi.createArt(artToCreate)
            console.log(response)
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
            </div>
        </form>
    )
}

export default AddArt