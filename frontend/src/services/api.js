const BASE_URL = "https://dentist-booking-platform-wh8p.onrender.com"

export const getDentists = async () => {
  const res = await fetch(`${BASE_URL}/api/dentists`)
  const data = await res.json()
  return data
}