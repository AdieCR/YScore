const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/usersController");
const {passwordsMatch, hashPwd, doesUserExist, isExistingUser, auth, verifyPwd} = require("../Middlewares/usersMiddleware");
const { validateBody } = require("../Middlewares/validateBody");
const { signUpSchema, loginSchema } = require("../schemas/validationSchema/allSchemas");

router.post("/signup", validateBody(signUpSchema), passwordsMatch, doesUserExist, hashPwd, UsersController.signup);
router.post("/login", validateBody(loginSchema), isExistingUser, verifyPwd, UsersController.login);
router.get('/logout', UsersController.logout);
router.get("/getUser", auth, UsersController.getUser);

router.put('/updateUserInfo', auth, UsersController.updateUserInfo);



module.exports = router;
 