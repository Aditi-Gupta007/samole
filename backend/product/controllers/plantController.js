import plantModel from "../models/plantModel.js";
import fs from 'fs'

// all plant list
const listplant = async (req, res) => {
    try {
        const plants = await plantModel.find({})
        res.json({ success: true, data: plants })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add plant
const addplant = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const plant = new plantModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await plant.save();
        res.json({ success: true, message: "Plant Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete plant
const removeplant = async (req, res) => {
    try {

        const plant = await plantModel.findById(req.body.id);
        fs.unlink(`uploads/${plant.image}`, () => { })

        await plantModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Plant Removed" })

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

export { listplant, addplant, removeplant,getProduct }