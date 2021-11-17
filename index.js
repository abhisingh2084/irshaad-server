import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);
const PORT = 8800;

mongoose.connect("mongodb+srv://abhisingh2084:13@Abhish1@cluster0.a6xqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}).then(()=>app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);
