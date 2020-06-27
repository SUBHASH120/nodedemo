const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user-controller');

router.post('/createuser', usercontroller.createuser);
router.get('/getuser',usercontroller.getuser);
router.get('/:id/getbyiduser',usercontroller.getbyiduser);

router.put('/:id/updateuser',usercontroller.updateuser);
router.delete('/:id/deleteuser',usercontroller.deleteuser);


module.exports = router;