import { useState } from "react"

function BookingForm({ dentist, onClose }) {

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    appointmentDate: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log("CONFIRM CLICKED") // debug

    const data = {
      ...formData,
      dentistName: dentist.name,
      clinicName: dentist.clinicName
    }

    try {

      const res = await fetch("https://dentist-booking-platform-wh8p.onrender.com/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      console.log("APPOINTMENT RESPONSE:", result)

      if (res.ok) {
        alert("Appointment booked successfully")
        onClose()
      } else {
        alert(result.message || "Failed to book appointment")
      }

    } catch (error) {
      console.log("ERROR:", error)
      alert("Server error")
    }

  }

  return (

    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000"
    }}>

      <div style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
      }}>

        <h2 style={{ marginBottom: "20px", color: "#111" }}>
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            name="patientName"
            placeholder="Patient Name"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />

          <select
            name="gender"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="date"
            name="appointmentDate"
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Confirm
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              marginLeft: "10px",
              background: "#6b7280",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>

        </form>

      </div>

    </div>

  )

}

export default BookingForm