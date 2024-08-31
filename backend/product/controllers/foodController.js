import plantModel from "../models/foodModel.js";
import fs from 'fs'

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await plantModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add food
const addFood = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const food = new plantModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await plantModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await plantModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}
const getProduct = async (req, res) => {
    try {
        const item = await plantModel.findById(req.params.id);
        // console.log(item)
        res.json({ success: true, product:item })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

export { listFood, addFood, removeFood,getProduct }