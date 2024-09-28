const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))

app.get('/',(req,res)=>{
    res.send("Backend Running");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server listening on ${PORT}`));