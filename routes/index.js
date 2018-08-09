const express = require('express')
const router = express.Router();
const appCache = require('./appCache')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const randomInt = getRandomInt(100)

    const cacheValue = await appCache.fetch(
        `cache_${randomInt}`,
        () => sleep().then(() => `THIS IS THE CACHE VALUE: ${randomInt}`)
    )

    res.send(cacheValue)
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 100));


const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = router;
