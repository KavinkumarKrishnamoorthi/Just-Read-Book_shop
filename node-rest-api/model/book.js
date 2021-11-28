const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    bookName: {
        type: String
    },
    authorName: {
        type: String
    },
    publishedYear: {
        type: Number
    },
    edition: {
        type: String
    },
    purchasePrice: {
        type: Number
    },
    sellingPrice: {
        type: Number
    },
    stock: {
        type: String
    },
    maxCountPerUser: {
        type: Number
    },
    description: {
        type: String
    },
    authorDetails: {
        type: String
    }
}, {
    collection: 'books'
})

module.exports = mongoose.model('Book', Book)