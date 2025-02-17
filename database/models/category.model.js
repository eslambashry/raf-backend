import { model, Schema } from "mongoose";


const categorySchema = new Schema({
    title:{
        type:String,
        required: true
    },
    area:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Image: {
        secure_url:{
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true,
        },
    },
    lang:{
        type:String,
        default:"ar",
        enum:["ar","en"],
        required:true,
    },
    coordinates: { // ^ for GPS
        latitude: {
            type: Number,
            required: true
        },                          
        longitude: {
            type: Number,
            required: true
        }
    },
    customId:{
        type:String,
    }
},{timestamps:true})

export const categoryModel = model("category",categorySchema)