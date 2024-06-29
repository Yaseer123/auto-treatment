import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Booking =
    mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
