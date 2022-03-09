const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true,'Please enter product name'],
    trim: true,
    maxlength: [100, 'Product name cannot 100 characters']
},
price:{
    type: Number,
    required: [true, 'Please enter product price'],
    maxlength: [100, 'Product name cannot exceed 100 characters'],
    default: 0.0
},
description:{
    type: String,
    required: [true, 'Please enter product decsription'],
},
ratings:{
    type: Number,
    default:0
},
images:[
    {
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type:String,
            required: true
        },
    }
],
category:{
type: String,
required:[true,'Please select category for this product'],
enum:{
    values:[
        
                "Accessories",
                "Clothes",
                "Souvenirs",
                "other",
                "Home",
                "packaging"
              
    ],
    message: 'Please select correct category for product'
}
},
seller: {
    type: String,
    reuqired: [true, 'Please enter product seller']
},
stock:{
    type: Number,
    required: [true, 'Please enter product stock'],
    maxlength: [5, 'Product name cannot exceed 5 characters'],
},
numOfReviews:{
    type: Number,
    default:0
    },
    review:[
        {
            name:{
                type:String,
                required:true
            },
            reting:{
                type:Number,
                required: true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }

    
})

 module.exports = mongoose.model('Product', productsSchema);