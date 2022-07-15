const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname,"/public")))
// app.use('/styles',express.static(path.join(__dirname, "public","index.css")))
// app.use("/js",express.static(path.join(__dirname,"public/index.js")))
// app.use("/")
console.log(__dirname)

var http = require('http');

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });




const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})