import { useEffect, useState } from "react"
import { getDentists } from "../services/api"

function Dentists() {

  const [dentists, setDentists] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await getDentists()
      console.log("API DATA:", data)   // 🔥 DEBUG
      setDentists(data)
    } catch (error) {
      console.log("ERROR:", error)
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Available Dentists</h1>

      {dentists.length === 0 && <p>No dentists found</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {dentists.map((d) => (
          <div key={d._id} style={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px"
          }}>
            <img src={d.photo} width="100" />
            <h3>{d.name}</h3>
            <p>{d.qualification}</p>
            <p>{d.experience} years</p>
            <p>{d.clinicName}</p>
            <p>{d.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dentists