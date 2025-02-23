const Contact = require("../models/contact");

const contact = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        const userContactData = await Contact.create({
            username,
            email,
            message
        });

        res.status(201).json({
            message: "Details submitted successfully"
        });
    } catch (error) {
        console.error("Contact logic error:", error);
        res.status(401).json({ error: "Internal Server Error" });
    }
};

module.exports = { contact };
