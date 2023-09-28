const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const path = require('path')

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.join({ message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))