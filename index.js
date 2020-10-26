const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const customFormat=(tokens, req, res) => {
    let format = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ]
    if (req.method === 'POST') {
        format = format.concat(JSON.stringify(req.body))
    }

    return format.join(' ')
  }

app.use(morgan(customFormat))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "9041324",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(1000));
}

app.get('/info', (request, response) => {
    response.send(`<div>Phonebook has info for ${persons.length} people</div>
                    <div> ${new Date()} </div> `)
})
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    const hasDuplicate = body => persons.filter(person => person.name.toLowerCase() === body.name.toLowerCase()).length > 0 ? true : false

    if (!body.number || !body.name) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    } else if (hasDuplicate(body)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
    response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})