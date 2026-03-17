import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/admin/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ email, password })

    })

    const data = await res.json()

    if (data.token) {

      localStorage.setItem("token", data.token)

      navigate("/admin")

    } else {

      alert("Invalid credentials")

    }

  }

  return (

    <div style={{ padding: "40px" }}>

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>
    

    </div>

  )

}

export default AdminLogin