import { useEffect, useState } from "react"
import DentistCard from "../components/DentistCard"

function Dentists() {

  const [dentists, setDentists] = useState([])

  useEffect(() => {
    fetchDentists()
  }, [])

  const fetchDentists = async () => {

    const res = await fetch("http://localhost:5000/api/dentists")

    const data = await res.json()

    setDentists(data)

  }

  return (

    <div style={{ padding: "40px" }}>

      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Available Dentists
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "30px"
        }}
      >

        {dentists.map((dentist) => (
          <DentistCard key={dentist._id} dentist={dentist} />
        ))}

      </div>

    </div>

  )

}

export default Dentists