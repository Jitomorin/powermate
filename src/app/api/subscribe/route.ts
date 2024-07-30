import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g., 'us1'
});

export async function POST(request: Request, res: any) {
  try {
    console.log("api key", process.env.MAILCHIMP_API_KEY);
    console.log("server", process.env.MAILCHIMP_API_SERVER);
    const { email, name } = await request.json();
    console.log("email", email);

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "Email and Name are required" }),
        { status: 400 }
      );
    }
    await mailchimp.lists
      .addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
      })
      .then(() => {});

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
    });
  } catch (error: any) {
    console.log("peter", error);
    return new Response(
      JSON.stringify({ error: error.message || error.toString() }),
      { status: 500 }
    );
  }
}
