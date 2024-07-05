import Contact from "@/lib/models/Contact";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    await mongooseConnect();

    const { name, email, subject, phone, message } = await req.json();

    if (!name || !email || !subject || !phone || !message) {
        return NextResponse.json(
            { error: "All required fields must be filled out." },
            { status: 400 }
        );
    }

    try {
        const newContact = await Contact.create({
            name,
            email,
            subject,
            phone,
            message,
        });
        return NextResponse.json(
            {
                success: "Contact form submitted successfully!",
                contact: newContact,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating contact:", error);
        return NextResponse.json(
            { error: "An error occurred while saving the contact." },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
