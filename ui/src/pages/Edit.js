import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint  = 'http://localhost:8000/api'

const Edit = () => {

  const { id } = useParams()
  const [staff, setStaff] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(0)

  const navigate = useNavigate()

  const update = async (e) => {
    e.preventDefault()
    await axios.post(`${endpoint}/update/${id}`, {
      staff: staff,
      position: position,
      salary: salary
    })
    navigate('/')
  }

  useEffect(() => {
    fetchStaffById()
  }, [])

  const fetchStaffById = async () => {
    const response = await axios.get(`${endpoint}/edit/${id}`)
    setStaff(response.data.staff)
    setPosition(response.data.position)
    setSalary(response.data.salary)
    console.log(response.data.id)
  }

  return (
    <div>
      <h3>Entry New Employee</h3>
      <form onSubmit={update}>
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
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Edit