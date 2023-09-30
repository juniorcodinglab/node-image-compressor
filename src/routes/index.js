import express from 'express';
import CompactorController from "../controllers/compactorController.js"

const routes = (app) => {

    const router = express.Router();

    router
        .get("/", CompactorController.getCompactor)
        .post("/", CompactorController.postCompactor)

    app.use(
        express.json(),
        router
    )
}

export default routes;