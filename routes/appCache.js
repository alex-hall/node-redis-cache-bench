const {RedisCache} = require('node-redis-cache')

const appCache = new RedisCache({defaultExpiry: 1000})

module.exports = appCache
