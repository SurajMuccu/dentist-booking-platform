const API_BASE = "https://dentist-booking-platform-wh8p.onrender.com"

export const getDentists = async () => {
  const res = await fetch(`${API_BASE}/dentists`)
  return res.json()
}