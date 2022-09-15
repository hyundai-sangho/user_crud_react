import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function EditUser() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`).then(function (response) {
      setInputs(response.data)
      console.log("EditUser의 useEffect: " + response.data)
    })
  }, [id])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.put(`http://localhost:5000/api/user/${id}/edit`, inputs).then(function () {
      navigate("/")
    })
  }

  return (
    <div style={{ margin: "0 auto", width: "500px" }}>
      <h1>Edit users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} value={inputs.name || ""} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} value={inputs.email || ""} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChange} value={inputs.mobile || ""} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
