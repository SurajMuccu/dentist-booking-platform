import { useEffect, useState } from "react"
import { getDentists, createAppointment } from "../services/api"

function Dentists() {

  const [dentists, setDentists] = useState([])
  const [selectedDentist, setSelectedDentist] = useState(null)

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: ""
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await getDentists()
      setDentists(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      await createAppointment({
        ...formData,
        dentistName: selectedDentist.name,
        clinicName: selectedDentist.clinicName
      })

      alert("Appointment booked successfully!")

      setSelectedDentist(null)

      setFormData({
        patientName: "",
        age: "",
        gender: "",
        appointmentDate: ""
      })

    } catch (error) {
      console.log(error)
      alert("Error booking appointment")
    }
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Available Dentists
      </h1>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>

        {dentists.map((d) => (

          <div key={d._id} style={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            textAlign: "center"
          }}>

            <img src={d.photo} width="100" style={{ borderRadius: "10px" }} />

            <h3>{d.name}</h3>
            <p>{d.qualification}</p>
            <p>{d.experience} years</p>
            <p>{d.clinicName}</p>
            <p>{d.location}</p>

            <button
              onClick={() => setSelectedDentist(d)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Book Appointment
            </button>

          </div>

        ))}

      </div>

      {/* 🔥 POPUP FORM */}
      {selectedDentist && (

        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            width: "300px",
            color: "black"
          }}>

            <h2 style={{ textAlign: "center" }}>
              Book Appointment
            </h2>

            <input
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <input
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              style={{ width: "100%", margin: "10px 0", padding: "8px" }}
            />

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px"
            }}>

              <button
                onClick={handleSubmit}
                style={{
                  background: "green",
                  color: "white",
                  padding: "8px",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Confirm
              </button>

              <button
                onClick={() => setSelectedDentist(null)}
                style={{
                  background: "gray",
                  color: "white",
                  padding: "8px",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default Dentists