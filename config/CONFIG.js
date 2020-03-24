require("dotenv").config();
let CONFIG = {};
CONFIG.secretOrKey = process.env.SECRET;
CONFIG.MONGODB_URI = process.env.MONGODB_URI;

module.exports = CONFIG;
