import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Admin() {

  const [appointments, setAppointments] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/admin-login")
      return
    }

    fetchAppointments(token)

  }, [])

  const fetchAppointments = async (token) => {

    const res = await fetch("http://localhost:5000/api/appointments", {

      headers: {
        Authorization: token
      }

    })

    const data = await res.json()

    setAppointments(data)

  }
  const logout = () => {

  localStorage.removeItem("token")

  window.location.href = "/admin-login"

}

  return (

    <div style={{ padding: "40px" }}>

      <h1 style={{ marginBottom: "20px" }}>
        Admin Appointments
      </h1>
<button
  onClick={logout}
  style={{
    marginBottom: "20px",
    padding: "8px 16px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer"
  }}
>
  Logout
</button>
      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >

        <thead>

          <tr>

            <th>Patient</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Dentist</th>
            <th>Clinic</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map((a) => (

            <tr key={a._id}>

              <td>{a.patientName}</td>

              <td>{a.age}</td>

              <td>{a.gender}</td>

              <td>
                {new Date(a.appointmentDate).toLocaleDateString()}
              </td>

              <td>{a.dentistName}</td>

              <td>{a.clinicName}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Admin