const mongoose = require('mongoose')

const DepartementSchema = mongoose.Schema({
    premierDep:{
        type: String,
        required: true
    },
    deuxiemeDep:{
        type: String,
        required: true
    }
})

const pays = mongoose.model('Departement', DepartementSchema)

module.exports = pays