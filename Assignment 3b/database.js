const mongoose = require("mongoose")

const DB_URI = "mongodb+srv://sakshiattarde2112:@cluster0.3jolo9q.mongodb.net/?retryWrites=true&w=majority"

module.exports = mongoose.connect(DB_URI)  // exporting promise