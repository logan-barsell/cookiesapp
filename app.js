const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.static(__dirname+'/static'))
app.use(cookieParser())

app.listen(3000, f=> {
	console.log("Server Running!")
})
