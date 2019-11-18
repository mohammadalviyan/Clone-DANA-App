const secretKey = process.env.SECRET_KEY || '270400';
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token=req.headers['xaccess-token']
    if (!token) return res.sendStatus(401)

    try {
        const verified = jwt.verify(token,secretKey)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}