import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api'

const List = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees()
    }, [])

    const fetchEmployees = async () => {
        const response = await axios.get(`${endpoint}/employees`)
        console.log(response.data)

        setEmployees(response.data)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td> {employee.staff} </td>
                            <td> {employee.position} </td>
                            <td> {employee.salary} </td>
                            <td>
                                <Link to={`/edit/${employee.id}`} >Edit</Link>&nbsp;
                                <Link to={`/delete/${employee.id}`}>Delete</Link>
                                {/* <button onClick={() => {
                                    axios.delete(`${endpoint}/delete/${employee.id}`)
                                }}>Delete</button> */}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List