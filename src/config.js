//? dependecies

require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    host: process.env.HOST || 'http://localhost:3000', 
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres', 
        password: process.env.DB_PASS || 'briggitte12',
        dbName: process.env.DB_NAME
    }
}


module.exports = config