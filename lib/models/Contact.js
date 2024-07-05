import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{11}$/.test(v); // Validate 11-digit phone number
            },
            message: (props) => `Please enter a valid 11-digit phone number.`,
        },
    },
    message: {
        type: String,
        required: true,
    },
});

const Contact =
    mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
