import express from "express";
import {
    REMOVE,
    GetALL, GetID, PostUser, PutUser, PatchUser
} from "../controllers/user.js"
const routerUser = express.Router();

routerUser.get("/users", GetALL);
routerUser.get("/users/:id", GetID)
routerUser.delete("/users/:id", REMOVE)
routerUser.put("/users/:id", PutUser)
routerUser.post("/users", PostUser)
routerUser.patch("/users/:id", PatchUser)
export default routerUser