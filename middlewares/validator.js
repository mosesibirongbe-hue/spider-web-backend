const Joi = require('joi');

exports.signUpSchema = Joi.object({
    fullName: Joi.string()
        .min(6)
        .max(60)
        .required(),

    userName: Joi.string()
        .min(6)
        .max(60)
        .required(),

    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$'))
        .message(
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required()
})


exports.signInSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$'))
        .message(
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required()
});

exports.acceptCodeSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),
    providedCode: Joi.number().required()
})

exports.changePasswordSchema = Joi.object({
    newPassword: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$'))
        .message(
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required(),
    oldPassword: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$'))
        .message(
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required(),
})

exports.acceptForgotPasswordCodeSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),
    providedCode: Joi.number().required(),
    newPassword: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$'))
        .message(
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required()
})

exports.createPlatformSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(60)
        .required(),

    description: Joi.string()
        .min(3)
        .max(120)
        .required(),

    link: Joi.string()
        .uri({
            scheme: ['http', 'https']
        })
        .max(200)
        .required()
        .messages({
            "string.uri": "Link must be a valid URL starting with http or https"
        }),

    userId: Joi.string()
        .optional()
});