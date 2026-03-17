const BASE_URL = "https://dentist-booking-platform-wh8p.onrender.com"

export const getDentists = async () => {
  const res = await fetch(`${BASE_URL}/api/dentists`)
  return res.json()
}

export const getAppointments = async () => {
  const res = await fetch(`${BASE_URL}/api/appointments`)
  return res.json()
}

export const createAppointment = async (data) => {
  const res = await fetch(`${BASE_URL}/api/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}