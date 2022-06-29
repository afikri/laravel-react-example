import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const Add = () => {

    const [staff, setStaff] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState(0)

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/store`, {
            staff: staff,
            position: position,
            salary: salary
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Entry New Employee</h3>
            <form onSubmit={store}>
                <div>
                    <label>New Staff </label>
                    <input
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        type='text'
                    />
                </div>
                <div>
                    <label>Position</label>
                    <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        type='text'
                    />
                </div>
                <div>
                    <label>Salary</label>
                    <input
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        type='number'
                    />
                </div>
                <button type='submit'>Store</button>
            </form>
        </div>
    )
}

export default Add