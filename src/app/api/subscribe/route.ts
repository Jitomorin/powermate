import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json(); // Parse JSON data from the request body
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 401 });
    }

    const mailChimpData = {
      members: [
        {
          email_address: email,
          status: "subscribed",
        },
      ],
    };

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID as string;
    const URL = `https://us1.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY as string}`,
        "Content-Type": "application/json", // Ensure the correct content type
      },
      body: JSON.stringify(mailChimpData),
    });

    const data = await response.json();

    if (data.errors?.[0]?.error) {
      return NextResponse.json(
        { error: data.errors[0].error },
        { status: 401 }
      );
    } else {
      return NextResponse.json({ success: true }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
