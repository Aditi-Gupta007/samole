import express from 'express';
import { addFood, listFood, removeFood ,getProduct} from '../controllers/foodController.js';
import multer from 'multer';
import { authMiddleware, jwtCheck } from '../middleware/auth.js';
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

foodRouter.get("/products",listFood);
foodRouter.post("/add",upload.single('image'),addFood);
foodRouter.post("/remove",removeFood);
foodRouter.get("/:id",getProduct);


export default foodRouter;