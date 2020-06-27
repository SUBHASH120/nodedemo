const express = require('express');
const router = express.Router();

const customerscontroller = require('../controllers/customers-controller');

router.post('/createcustomers',customerscontroller.createcustomers);
router.get('/getcustomers',customerscontroller.getcustomers);
router.put('/:id/updatecustomers',customerscontroller.updatecustomers);
router.get('/:id/getcustomersbyid',customerscontroller.getcustomersbyid);



module.exports = router;