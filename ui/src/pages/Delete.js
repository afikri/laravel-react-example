import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api'

const Delete = () => {
  const { id } = useParams()
  
  const handleDeleteRecord = () => {
    axios.delete(`${endpoint}/delete/${id}`)
    console.log('Record with id ' + id + ' has been deleted')
  }

  return (
    <div>
      Yadda, are you sure?<br />
      <div style={{ display: "block", padding: "10px 0" }}>
        <button type='submit' onClick={handleDeleteRecord}>Delete</button><br/>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default Delete