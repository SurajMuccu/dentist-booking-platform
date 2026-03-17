import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dentists from "./pages/Dentists"
import Admin from "./pages/Admin"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <BrowserRouter>
<nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#111",
    color: "white",
    fontSize: "18px"
  }}
>

        <h2>Dentist Booking</h2>

        <div>

          <Link to="/" style={{ marginRight: "20px", color: "white" }}>
            Home
          </Link>

          <Link to="/admin" style={{ color: "white" }}>
            Admin
          </Link>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Dentists />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App