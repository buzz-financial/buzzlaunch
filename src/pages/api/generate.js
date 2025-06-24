export const prerender = false;

export async function POST({ request }) {
  try {
    const { prompt } = await request.json();

    if (!prompt || prompt.length < 10) {
      return new Response(JSON.stringify({ error: "Prompt too short" }), {
        status: 400,
      });
    }

    // Simulated response (replace with GPT call later)
    const fakeSiteId = Math.random().toString(36).substring(2, 10);
    const fakeConfig = {
      storeName: "My Test Store",
      theme: "modern",
      products: [
        { name: "Sample Product 1", price: 19.99 },
        { name: "Sample Product 2", price: 29.99 },
      ],
    };

    return new Response(
      JSON.stringify({
        siteId: fakeSiteId,
        config: fakeConfig,
        message: `Site config generated for prompt: "${prompt}"`,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
