const express = require('express');
const router = express.Router();
const Books = require('../Controller/Book_list_controller')

router.post('/Add', Books.BookRegsister);
router.put('/Update/:id', Books.UpdateInfo);
router.get('/search/:key', Books.SearchBook);
router.delete('/delete:id', Books.DeleteBook);
module.exports = router;