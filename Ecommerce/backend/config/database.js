const mongoose = require('mongoose');
// const { connect } = require('../app');

const connectDatabase = () => {
 mongoose.connect(process.env.DB_LOCAL_URI,{
 useNewUrlParser: true,
 useUnifiedTopology: true,
//    useCreateIndex: false,
}).then(con =>{
    console.log(`MongoDB Database connected whith HOST: ${con.connection.host}`);
})
}

module.exports = connectDatabase