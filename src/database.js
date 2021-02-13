const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bills', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(res => console.log('DB is connected'))
    .catch(err => console.log(err))