import { categoryModel } from "../../../database/models/category.model.js"
import { userModel } from "../../../database/models/user.model.js"

export const withListUsers = async (req, res) => {  
    const userId = req.authUser._id
    const categoryId = req.body.category

    const user = await userModel.findById(userId)
    
    if(user.wishlist.includes(categoryId)){
            return res.status(400).json({ message: "Unit already exists in wishlist" })    
   }
   
    const unit = await categoryModel.findById(categoryId)

    if (!unit) {
        return res.status(404).json({ message: "Unit not found" })
    }

    const newUnit = user.wishlist.push(unit._id)
    if (!newUnit) {
        return res.status(404).json({ message: "Unit not found" })
    }

    await user.save();
    res.status(200).json({ message: "Unit added to wishlist successfully" })
}

export const getWithListUsers = async (req, res) => {
    const userId = req.authUser._id
    console.log(userId);
    
    const user = await userModel.findById(userId).populate('wishlist')
    console.log(user);
    
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    res.status(200).json({ message: "Done", user })
}

export const deleteWithListUsers = async (req, res) => {
    const userId = req.authUser._id
    const unitId = req.body.categoryId
    
    const user = await userModel.findById(userId)
    const unit = await categoryModel.findById(unitId)
    if (!unit) {
        return res.status(404).json({ message: "Unit not found" })
    }   
    const newUnit = user.wishlist.pull(unit._id)
    if (!newUnit) {
        return res.status(404).json({ message: "Unit not found" })
    }
    await user.save();
    res.status(200).json({ message: "Unit deleted from wishlist successfully" })
}