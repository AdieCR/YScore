const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/usersController");
const {passwordsMatch, hashPwd, doesUserExist, isExistingUser, auth, verifyPwd} = require("../Middlewares/usersMiddleware");
const { validateBody } = require("../Middlewares/validateBody");
const { signUpSchema, loginSchema } = require("../schemas/validationSchema/allSchemas");

router.post("/signup", validateBody(signUpSchema), passwordsMatch, doesUserExist, hashPwd, UsersController.signup);
// router.post("/login", validateBody(loginSchema), isExistingUser, verifyPwd, UsersController.login);
// router.get('/logout', UsersController.logout);

// router.get("/verifyLogin", auth, UsersController.verifyLogin);
// router.get("/:userId", auth, UsersController.getUser);
// router.get("/getAllUsers", auth, UsersController.getAllUsers);


// router.put("/updateUser", auth, passwordsMatch, hashPwd, UsersController.updateUser);


module.exports = router;
 