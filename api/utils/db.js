import mysql from "mysql2/promise"

const pool = await mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'costam',
    password: '<3database^_^'
})