const express = require('express');
const mongoose = require('mongoose');
const BookSchema = {
    name: {
        type: String
    },
    pname: {
        type: String
    },
    age: {
        type: String
    },
    date: {
        type: String
    },
    page: {
        type: String
    },
    Book_type: {
        type: String
    }
     
}

const Book_list = mongoose.model("book", BookSchema);
module.exports = Book_list;