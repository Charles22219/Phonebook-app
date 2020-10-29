const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url =
    `mongodb+srv://fullstack:${password}@project0.5bwrf.mongodb.net/phonebook-app?retryWrites=true`
//mongodb+srv://fullstack:<password>@project0.5bwrf.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
}, { collection: 'persons' })

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 3) {
  const newName = process.argv[3]
  const newNumber = process.argv[4]

  const person = new Person({
    name: newName,
    number: newNumber
  })

  person.save().then( () => {
    console.log(`added ${newName} number ${newNumber} to phonebook`)
    mongoose.connection.close()
  })
}
else {
  Person.find({ }).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}


