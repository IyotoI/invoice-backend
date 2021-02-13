const {Schema, model} = require('mongoose')

const billSchema = new Schema({
    invoiceCode: {type: String, required: true},
    client: {type: String, required: true},
    city: {type: String, required: true},
    nit: {type: String, requred: true},
    totalInvoice: {type: String, required: true},
    subTotal: {type: String, required: true},
    iva: {type: String, required: true},
    retention: {type: String, required: true},
    creationDate: {type: String, required: true},
    state: {type: String, required: true},
    pay: {type: Boolean, required: true},
    paymentDate: {type: String, required: true},
    codeInvoice: {type: String, required: false}
}, {
    versionKey: false
})

module.exports = model('bill', billSchema)