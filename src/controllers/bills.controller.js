const billCtrl = {}

const Bill = require('../models/bill')

billCtrl.getBills = async (req, res) => {
    const bills = await Bill.find()
    res.json(bills)
}

billCtrl.createBills = async (req, res) => {
    console.log(req.body)
    const newBill = new Bill(req.body)
    await newBill.save()
    res.json({status: 'Invoice created'})
    
}

billCtrl.deleteInvoice = async (req, res) => {
    await Bill.findOneAndDelete(req.params.id)
    res.json({status: 'Invoice delete'})
}

billCtrl.editInvoice = async (req, res) => {
    await Bill.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Invoice update'})
}

module.exports = billCtrl