import Booking from "@/lib/models/Booking";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();

    if (method === "POST") {
        const { name, phone, message } = req.body;

        if (!name || !phone || !message) {
            return res
                .status(400)
                .json({ error: "All required fields must be filled out." });
        }

        try {
            const newBooking = await Booking.create({ name, phone, message });

            return res.status(201).json(newBooking);
        } catch (error) {
            return res
                .status(500)
                .json({ error: "An error occurred while saving the Booking." });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed." });
    }
}
