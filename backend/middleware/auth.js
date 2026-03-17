import jwt from "jsonwebtoken"

const auth = (req, res, next) => {

  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {

    const decoded = jwt.verify(token, "secret123")

    req.admin = decoded

    next()

  } catch {

    res.status(401).json({ message: "Invalid token" })

  }

}

export default auth