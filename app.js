// Usando objeto express
const express = require('express')
// App de express
const app = express()
app.use(express.json()) //Indicamos que usaremos JSON
//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP METHODS
//GET Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Alexis1"}
    const explorer2 = {id: 2, name: "Alexis2"}
    const explorer3 = {id: 3, name: "Alexis3"}
    const explorer4 = {id: 4, name: "Alexis4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})
//GET Crea un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Alexis"}
    res.status(200).json(explorer )
})

// POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({message: "Created"})
})

// PUT Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //parametros de un cliente
    res.status(200).json({message: "Updated!"})
})

// DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //parametros de un cliente
    res.status(200).json({message: "Deleted"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})
