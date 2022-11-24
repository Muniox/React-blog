import mysql from "mysql2/promise"

export const pool = await mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'blog',
    password: '<3database^_^',
    connectionLimit: 10,
    port: 3306,
    namedPlaceholders: true,
    decimalNumbers: true,
})