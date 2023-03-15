import myApi from '../../service/service'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddArt = (user) => {

    const [art, setArt] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [artist, setArtist] = useState(user.username)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        navigate('/my-profile')


        formData.append('image', art)
        formData.append('description', description)
        formData.append('title', title)
        formData.append('date', date)
        formData.append('artist', artist)
        // const { data } = await axios.post("http://localhost:5005/api/art", formData)
        // console.log(data)
        try {
            const response = await myApi.createArt(formData)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const handleCancel = (event) => {
        navigate('/my-profile') // navigate to my-profile page on cancel
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='art'>Upload your file</label>
            <input
                type='file'
                name='image'
                onChange={(event) => setArt(event.target.files[0])}
            />
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
                <button onClick={handleSubmit}>Submit art</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default AddArt