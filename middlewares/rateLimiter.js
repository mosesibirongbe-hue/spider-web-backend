const rateLimit = require("express-rate-limit");

exports.verificationCodeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // max 10 requests per IP
    message: {
        success: false,
        message: "Too many verification requests from this IP. Try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

exports.forgotPasswordCodeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, 
    message: {
        success: false,
        message: "Too many forgot password requests from this IP. Try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
})