import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Resend SDK with your API key
const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

// Email that will receive the form submissions
const TO_EMAIL = process.env.TO_EMAIL || "your-email@example.com";

export async function POST(request: NextRequest) {
  console.log("API route called - /api/send");
  console.log("Resend API Key present:", !!resendApiKey);
  console.log("TO_EMAIL:", TO_EMAIL);

  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;
    console.log("Received form data:", {
      name,
      email: email?.substring(0, 3) + "...",
      messageLength: message?.length || 0,
    });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resendApiKey) {
      console.error("Resend API key is missing");
      return NextResponse.json(
        { error: "Server configuration error - missing API key" },
        { status: 500 }
      );
    }

    // Send the email using Resend
    console.log("Attempting to send email via Resend...");
    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // Use a verified sender from Resend
        to: [TO_EMAIL],
        subject: `Contact form submission from ${name}`,
        reply_to: email,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
      });

      // Handle errors from Resend
      if (error) {
        console.error("Resend API error:", error);
        return NextResponse.json(
          { error: "Failed to send email", details: error },
          { status: 500 }
        );
      }

      console.log("Email sent successfully", data);
      // Return success response
      return NextResponse.json({ success: true, data });
    } catch (resendError) {
      console.error("Resend API error (caught):", resendError);
      return NextResponse.json(
        {
          error: "Failed to send email through Resend API",
          details:
            typeof resendError === "object"
              ? JSON.stringify(resendError)
              : String(resendError),
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
