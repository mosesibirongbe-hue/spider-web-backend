const express = require('express')
const authController = require('../controllers/authController');
const { identifier } = require('../middlewares/identification');
const { verificationCodeLimiter,forgotPasswordCodeLimiter } = require("../middlewares/rateLimiter");
const router = express.Router()

router.get('/greeting', authController.greeting);

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', authController.signout);

router.patch('/send-verification-code', verificationCodeLimiter, authController.sendVerificationCode);
router.patch('/verify-verification-code', authController.verifyVerificationCode);
router.patch('/change-password', identifier, authController.changePassword);
router.patch('/send-forgot-password-code', forgotPasswordCodeLimiter, authController.sendForgotPasswordCode);
router.patch('/verify-forgot-password-code', authController.verifyForgotPasswordCode);

module.exports = router