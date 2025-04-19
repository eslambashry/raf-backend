import { Schema,model } from "mongoose"
import pkg from 'bcrypt'
import { systemRoles } from "../../src/utilities/systemRole.js"

const userSchema = new Schema({

    firstName:{
        type:String,
        required: true,
    },

    middleName:{
        type:String,
        required: true,
    },
    verificationCode: Number,
    codeExpiresAt: Date,
    lastName:{
        type:String,
        required: true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        required:true,
        default:systemRoles.USER,
        enum:[systemRoles.ADMIN,systemRoles.SUPER_ADMIN,systemRoles.USER],
    },  

     phoneNumber:{
        type:String,
    },

    profilePicture:{
        secure_url:String,
        public_id:String,
    },

    status:{
        type:String,
        default:'غير نشط',
        enum:['الان نشط','غير نشط'],
    },
    lastLogin:{
        type:Date,
    },
    wishlist:[{
        type:Schema.Types.ObjectId,
        ref:'category'
    }],
    token:String,
    forgetCode:String,
},{timestamps:true})

    userSchema.pre('save',function(){
        this.password = pkg.hashSync(this.password, +process.env.SALT_ROUNDS)
    })

export const userModel = model('User', userSchema)

