import Booking from "@/lib/models/Booking";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server"; //Imported Next Response

export async function POST(req) {
    await mongooseConnect();

    const { name, phone, message } = await req.json();

    if (!name || !phone || !message) {
        return NextResponse.json(
            //Replaces res with NextResponse
            { error: "All required fields must be filled out." },
            { status: 400 }
        );
    }

    try {
        const newBooking = await Booking.create({ name, phone, message });
        return NextResponse.json(newBooking, { status: 201 });
    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json(
            { error: "An error occurred while saving the Booking." },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
