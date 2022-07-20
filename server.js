const express = require('express')
const { get } = require('lodash')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname,"/public")))

console.log(__dirname)


const{submitResin, getResin} = require('./controller')


app.post('/siloOne', submitResin)
app.get('/resin',getResin)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})




