const dotenv = require('dotenv');
dotenv.config();

console.log('Database URL:', process.env.DATABASE_URL);
console.log('Shadow Database URL:', process.env.SHADOW_DATABASE_URL);
