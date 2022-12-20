const router = require("express").Router();
const User = require("../models/User");


//CREATE POST REQUEST OF USER

router.post("/user", async (req, res) => {
    const newUser = new User(req.body);

    try {
        const addedUser = await newUser.save();
        res.status(200).send(addedUser);
    } catch (err) {
        res.status(500).send(err);
    }
});



//GET ALL USERS
router.get("/user", async (req, res) => {
    const users  = await User.find({}).sort({score:-1})

    res.send(users)
});



module.exports = router;
