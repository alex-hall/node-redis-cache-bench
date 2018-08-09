const {RedisCache} = require('node-redis-app-cache')

const appCache = new RedisCache({defaultExpiry: 1000})

module.exports = appCache
