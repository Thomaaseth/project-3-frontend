import myApi from '../../service/service'
import React, { useState } from 'react'

const AddArt = () => {

    const [art, setArt] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(0)
    const [artist, setArtist] = useState('')

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
                {/* Upload field */}
                {/* onChange={(event) => setArt(event.target.value)} */}

            </div >
            <div>
                <label htmlFor='title'>Title</label>
                <div>
                    {/* Upload field */}
                    {/* onChange={(event) => setTitle(event.target.value)} */}

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
                    {/* Upload field */}
                    {/* onChange={(event) => setDate(event.target.value)} */}

                </div >
                <label htmlFor='artist'>Artist name</label>
                <div>
                    {/* Upload field */}
                    {/* onChange={(event) => setArtist(event.target.value)} */}
                </div >
                <button>Submit art</button>
            </div>
        </form>
    )
}

export default AddArt