const router = require("express").Router();




//CREATE RANDOM WORD

router.get("/random-word", async (req, res) => {
    try {

        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        let n = Math.floor(Math.random() * (8 - 4 + 1) + 4)
        for (let i = 0; i < n; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        respond = {
            word: result,
            length: result.length,
            totalScore: result.length
        }
        res.send(respond)

    } catch (err) {
        console.log(err);
        res.send(500).json({ error: true, message: "Internal Server Error" })
    }
})




module.exports = router;
