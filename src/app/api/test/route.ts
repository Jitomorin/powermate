export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    console.log("Received:", email, name);

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error: any) {
    console.error("Test Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || error.toString() }),
      { status: 500 }
    );
  }
}
