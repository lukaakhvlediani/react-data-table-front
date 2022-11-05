import Router from "koa-router";
const router = new Router();
import {getUser, addUser,deleteUser,update_user} from "./controllers/user.controllers"


router.get("/user_list", getUser);
router.post("/add_user", addUser);
router.delete("/delete_user/:id", deleteUser)
router.put("/update_user/:id" , update_user)

export default router;