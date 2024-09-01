import express from 'express';
import { addplant, listplant, removeplant ,getProduct} from '../controllers/plantController.js';
import multer from 'multer';
import { authMiddleware, jwtCheck } from '../middleware/auth.js';
const plantRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

plantRouter.get("/products",listplant);
plantRouter.post("/add",upload.single('image'),addplant);
plantRouter.post("/remove",removeplant);
plantRouter.get("/:id",getProduct);


export default plantRouter;