const express=require('express');
const { addTransaction, editTransaction, deleteTransaction,getAllTransaction } = require('../controllers/transactionCtrl');

//router object
const router=express.Router()

//addTransaction post method
router.post('/add-Transaction',addTransaction);

//Edit Transaction
router.post('/edit-Transaction',editTransaction);

//Delete Transaction
router.post('/delete-Transaction',deleteTransaction);

//get transaction
router.post('/get-transaction',getAllTransaction);


module.exports=router;