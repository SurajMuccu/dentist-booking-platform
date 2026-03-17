import { useEffect, useState } from "react"
import DentistCard from "../components/DentistCard"
import { getDentists } from "../services/api"

function Dentists() {

  const [dentists, setDentists] = useState([])

  useEffect(() => {
    fetchDentists()
  }, [])

  const fetchDentists = async () => {
    try {
      const data = await getDentists()   // ✅ USING API FILE
      console.log("DATA:", data)         // debug
      setDentists(data)
    } catch (error) {
      console.log("ERROR:", error)
    }
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