import 'dotenv/config';

const CONFIG = {  
  // DB
  DB: process.env.DB || 'mongodb://localhost/exampleDB',
  DB_NAME: process.env.DB_NAME || 'testDB',
  // JWT
  JWT_ACCESSTOKEN_SECRET: process.env.JWT_ACCESSTOKEN_SECRET || 'secret',  
  // listen port
  PORT: process.env.PORT || 3000,
};

export default CONFIG;
