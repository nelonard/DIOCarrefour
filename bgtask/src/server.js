import 'dotenv/config'; 
import express from 'express';

import userController from './app/controllers/userController';

import passwordGenerator from 'password-generator';



const app = express();

app.use(express.json());

app.post('./users', userController.store);

app.listen(process.env.PORT, () =>{
    console.log(`Server running on the ${process.env.PORT}`)
});




