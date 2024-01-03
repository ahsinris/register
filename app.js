import express from 'express'
import Router from './router/userrouter.js'

const app = express()
app.use(express.json())

app.use(Router)
app.listen(process.env.PORT, () => {
  console.log(`listned at  ${process.env.PORT}`)
})
