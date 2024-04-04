const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(token){
            const tokenArray = token.split(' ');
            const tokenValue = tokenArray[1];
            console.log("🚀 ~ process.env.JWT_KEY:", process.env.JWT_KEY)
            const decoded = jwt.verify(tokenValue, process.env.JWT_KEY);
            req.userData = decoded;
            next();
        }
    } catch (error) {
        console.log("🚀 ~ error:", error)
        next({
            message: 'Auth failed',
            status: 401
        });
    }
};