import { NextResponse } from "next/server";
import * as z from "zod";

// Server-side Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().min(2, "Organization name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Event date is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, organization, email, phone, eventType, eventDate, message } = result.data;

    // Log the contact form submission details (simulate email sent or DB insertion)
    console.log("=== Contact Inquiry Received ===");
    console.log(`Name: ${name}`);
    console.log(`Organization: ${organization}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Event Type: ${eventType}`);
    console.log(`Event Date: ${eventDate}`);
    console.log(`Message: ${message}`);
    console.log("================================");

    // Return a success response
    return NextResponse.json(
      { message: `Thank you, ${name}. Your inquiry for a ${eventType} has been successfully received. A Nexara specialist will reach out within 2 hours.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
