require('dotenv').config()
const data = {
    PORT: process.env.PORT,
    DB: process.env.DB,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_SECRETREF: process.env.JWT_SECRETREF,
    JWT_EXPIRESREF_IN: process.env.JWT_EXPIRESREF_IN
}
module.exports = data