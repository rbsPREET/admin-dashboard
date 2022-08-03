export const authRegisterValidator = (req, res, next) => {
    req.check("email", "Email is required").notEmpty()
    req.check("email", "Invalid email").isEmail()

    req.check("password", "Password is required").notEmpty()
    req.check("password", "Password is required").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters")
    req.check(
        "password",
        "Password must contain at least 6 characters, One lowercase, One uppercase, One number, One special symbol"
    ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i")

    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map((err) => err.msg)[0]
        return res.status(400).json({ error: firstError })
    }

    next()
}