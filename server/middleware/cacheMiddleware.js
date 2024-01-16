
const NodeCache = require("node-cache");
const cache = new NodeCache();

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedData = cache.get(key);

    if (cachedData) {
        
        return res.json({ data: cachedData, source: "cache" });
    }

    next();
};

module.exports = cacheMiddleware;
