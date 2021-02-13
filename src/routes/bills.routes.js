const {Router} = require('express')
const router = Router()

const billsCtrl = require('../controllers/bills.controller')

router.get('/', billsCtrl.getBills)
router.post('/', billsCtrl.createBills)
router.put('/:id', billsCtrl.editInvoice)
router.delete('/:id', billsCtrl.deleteInvoice)

module.exports = router