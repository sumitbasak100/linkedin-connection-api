const router = require("express").Router();
const User = require("../model/User");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const isuser = await User.findOne({ email: req.body.email });
        if(isuser) {return res.status(400).json("Email already used");}


      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) {return res.status(400).json("Email Not Found");}

    const validated = req.body.password == user.password
    if(!validated) {return res.status(400).json("Wrong password!");}

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;