import { NextResponse } from "next/server";
import * as z from "zod";

// Server-side validation schema for Careers
const careerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  nativeLanguage: z.string().min(2, "Native language details required"),
  otherLanguages: z.string().min(2, "Fluent languages details required"),
  specialization: z.string().min(1, "Please select a primary specialization"),
  experience: z.string().min(1, "Years of experience required"),
  resumeLink: z.string().url("Please provide a valid resume URL (Google Drive, LinkedIn, etc.)"),
  message: z.string().min(10, "Cover letter must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const result = careerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, nativeLanguage, otherLanguages, specialization, experience, resumeLink, message } = result.data;
    const appsScriptUrl = process.env.CAREER_APPS_SCRIPT_URL;



    if (appsScriptUrl) {
      console.log(`Forwarding to Google Sheet Career Script: ${appsScriptUrl}`);
      const payload = {
        formType: "career",
        name,
        email,
        phone,
        nativeLanguage,
        otherLanguages,
        specialization,
        experience,
        resumeLink,
        message
      };

      const response = await fetch(appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const textResponse = await response.text();
      let resJson;
      try {
        resJson = JSON.parse(textResponse);
      } catch (e) {
        console.error("Failed to parse JSON response from Apps Script:", textResponse);
      }

      if (!response.ok || (resJson && resJson.result === "error")) {
        return NextResponse.json(
          { error: resJson?.error || "Failed to save application to spreadsheet." },
          { status: 500 }
        );
      }
    } else {
      console.warn("CAREER_APPS_SCRIPT_URL is not set. Data logged to server console only.");
    }

    return NextResponse.json(
      { message: `Thank you, ${name}. Your application has been successfully received. We will contact you soon after reviewing your credentials.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in career API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
