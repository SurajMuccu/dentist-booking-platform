import { useState } from "react"
import BookingForm from "./BookingForm"

function DentistCard({ dentist }) {

  const [showForm, setShowForm] = useState(false)

  return (

    <div
  style={{
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    background: "white",
    transition: "0.3s",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    
  }}
>
    

      <img
        src={dentist.photo}
        alt={dentist.name}
        width="120"
        style={{ borderRadius: "8px" }}
      />

      <h3>{dentist.name}</h3>

      <p>{dentist.qualification}</p>

      <p>{dentist.experience} years experience</p>

      <p>{dentist.clinicName}</p>

      <p>{dentist.location}</p>

      <button
        onClick={() => setShowForm(true)}
        style={{
          padding: "8px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Book Appointment
      </button>

     {showForm && (
  <BookingForm
    dentist={dentist}
    onClose={() => setShowForm(false)}
  />
)}

    </div>

  )

}

export default DentistCard