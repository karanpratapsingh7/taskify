const router = require("express").Router();
const register = require("../service/user").register;
const authMiddleware = require("../middleware/authMiddleware");
const { login, userDetails, logout } = require("../service/user");

router.post("/register", register);
router.post("/login", login);
router.get("/getUserDetails", authMiddleware, userDetails);
router.post("/logout", authMiddleware, logout);

module.exports = router;
