const express = require("express")
const app = express()
const cors = require("cors")
const FuncionariosRotas = require("./Routes/FuncionarioRoutes")
app.use(express.json())
require("./database/connection")
require("./Model/Funcionario")


app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use(cors())
app.use(FuncionariosRotas)
app.listen(3000,"127.0.0.1", () => {
  console.log("Server is running on port http://127.0.0.1:3000")
})
