const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:test1234@navi211-uwjet.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true , useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("err"))

app.get('/', (req, res) => res.send('안녕하세요'))

app.get('/reg', (req, res) =>{
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))