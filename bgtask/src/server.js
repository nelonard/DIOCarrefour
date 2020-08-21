import 'dotenv/config'; 
import express from 'express';

import userController from './app/controllers/userController';

import passwordGenerator from 'password-generator';
import BullBoard from 'bull-board';
import queue from './app/lib/queue'



const app = express();
BullBoard.setQueues(queue.queues.map(queue => queue.bull))


app.use(express.json());

app.post('./users', userController.store);

app.use('/admin/queues', BullBoard.UI)

app.listen(process.env.PORT, () =>{
    console.log(`Server running on the ${process.env.PORT}`)
});




