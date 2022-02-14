const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


app.get('/', (req, res) => {
    res.send('Hello World! ')
})

app.get('/api', (req, res) =>{
    res.json({ message: "Hello from api!"})
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})