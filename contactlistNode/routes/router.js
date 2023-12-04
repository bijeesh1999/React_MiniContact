const express = require('express');
const router = express.Router();
const {
    createContact,
    getAllContact,
    getOneContact,
    putOneContact,
    deleteOneContact,
} = require('../controller/contactController');

router.route('/').post(createContact).get(getAllContact);

router.route('/:id').get(getOneContact).put(putOneContact).delete(deleteOneContact);

module.exports = router;
