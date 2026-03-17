const API_BASE = "http://localhost:5000/api"

export const getDentists = async () => {
  const res = await fetch(`${API_BASE}/dentists`)
  return res.json()
}