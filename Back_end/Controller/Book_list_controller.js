const express = require("express");
const book_list = require('../Model/book_list');
const cors = require("cors");
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const app = express();
app.use(express.json());
app.use(cors());

const BookRegsister = async (req, resp) => {
    let books = new book_list(req.body);

    let result = await books.save();
    result = result.toObject();

    collection.insertOne(books, (err, result) => {
        if (err) throw err;
        resp.send('Data saved successfully');
      });
}
const FindBooks=async (req, resp) => {
    const doctors = await book_list.find();
    if (doctors.length > 0) {
        resp.send(doctors)
    } else {
        resp.send({ result: "No Doctors found" })
    }
}

 
const UpdateInfo = async (req, resp) => {
    let result = await book_list.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
}

const SearchBook=async (req, resp) => {
    let result = await book_list.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                age: { $regex: req.params.key }
            },
            {
                Book_type: { $regex: req.params.key }  
            }
             
        ]
    });
    resp.send(result);
}

const DeleteBook=async (req, resp) => {
    let result = await book_list.deleteOne({ _id: req.params.id });
    resp.send(result)
}



module.exports = {
    BookRegsister,
    UpdateInfo,
    SearchBook,
    DeleteBook,
    FindBooks
}
