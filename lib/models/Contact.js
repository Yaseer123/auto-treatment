import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    subject: {
        type: "string",
        required: true,
    },
    messsage: {
        type: "string",
        required: true,
    },
});

const Contact =
    mongoose.models.Contact || mongoose.model("Contack", contactSchema);

export default Contact;
