import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.access_token
    if (!accessToken) {
        return res.status(403).json({ message: "Unauthorized" })
    }
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Unvalid Token" })
        }
        req.user = user
        next()
    })
}