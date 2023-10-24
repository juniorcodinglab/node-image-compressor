import express from 'express';
import CompactorController from "../controllers/compactorController.js";
import multerMiddleware from '../middleware/multer.js'

const routes = (app) => {

    const router = express.Router();

    router
        .get("/", CompactorController.getCompactor)
        .post("/", multerMiddleware.single('image'), CompactorController.postCompactor)

    app.use(
        express.json(),
        router
    )
}

export default routes;