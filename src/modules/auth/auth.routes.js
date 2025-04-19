import { Router } from "express";
import * as AuthCon from './auth.controller.js'
import * as wishCon from './wishList.controller.js'
import { isAuth } from "../../middleware/isAuth.js";
import { addUsersEndpoints } from "./authEndpoints.js";

const router = Router()


router.get('/users',AuthCon.getAllUser) 

   router.post('/signUp',AuthCon.signUp) 
   router.post('/signIn',AuthCon.login)
   router.put('/update',AuthCon.updateUser)

   
    
   router.post("/sendEmailNew",AuthCon.sendEmailBinCodeToAdd)
   router.post("/add",isAuth(addUsersEndpoints.ADD_USER),AuthCon.addUser)  

   router.get('/users',AuthCon.getAllUser) 
   router.get('/getOne',AuthCon.getOneUser) 
   // router.post('/forget',AuthCon.forgetPassword)
  
   router.post("/sendEmail",AuthCon.sendEmailBinCode)
   router.post('/reset',AuthCon.resetPassword)
   router.post('/logout',AuthCon.logout)


   router.delete('/delete/:id',isAuth(addUsersEndpoints.DELETE_USER),AuthCon.deleteUser)
   router.put('/update/:id',isAuth(addUsersEndpoints.UPDATE_USER),AuthCon.updateUserFromSuperAdmin)


   router.get('/usersCount',AuthCon.usersCount) 
   router.get('/getRafUser',AuthCon.getAllRafUsers) 

   router.post('/forgetmypassword',AuthCon.forgetmyPassword)

   router.post('/resetmypassword/:token',AuthCon.resetmyPassword)

   router.get('/user/profile',isAuth(addUsersEndpoints.ADD_WHSHLIST),AuthCon.getUserProfile) 

   // ^ ========================== Wishlist ================================================
   router.post('/wishlist',isAuth(addUsersEndpoints.ADD_WHSHLIST),wishCon.withListUsers)
   router.get('/wishlist',isAuth(addUsersEndpoints.ADD_WHSHLIST),wishCon.getWithListUsers)
   router.patch('/wishlist',isAuth(addUsersEndpoints.DELETE_WHSHLIST),wishCon.deleteWithListUsers)
   // ^ ========================== Wishlist ================================================
   router.get('/confirm/:token',AuthCon.confirmEmail)
   export default router

