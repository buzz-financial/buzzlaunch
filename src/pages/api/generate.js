import { siteSchema } from "../../utils/schema";

export async function POST({ request }) {
  const { prompt } = await request.json();

  const gptPrompt = `
You are a strict JSON API.

Respond ONLY with raw JSON (no markdown, no comments, no code blocks, no explanation).

Your response must follow this schema:
{
  "storeName": string,
  "theme": string,
  "sections": [
    { "type": "hero", "heading": string, "subheading": string },
    { "type": "products", "products": [{ "name": string, "price": number }] }
  ]
}

Prompt: "${prompt}"
Respond with ONLY the JSON, nothing else.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: gptPrompt }],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  console.log("FULL GPT RESPONSE:", data); // ← Optional but helpful

  if (!data.choices || !data.choices[0]?.message?.content) {
    console.error("GPT returned unexpected structure:", data);
    return new Response(
      JSON.stringify({
        error: "GPT response missing expected content.",
        rawResponse: data,
      }),
      { status: 500 }
    );
  }

  const rawText = data.choices[0].message.content;
  console.log("GPT RAW:", rawText);

  let rawConfig;
  try {
    rawConfig = JSON.parse(rawText);
  } catch (err) {
    console.error("GPT JSON Parse Error:", err.message);
    return new Response(
      JSON.stringify({ error: "Invalid JSON from GPT", raw: rawText }),
      {
        status: 400,
      }
    );
  }

  const result = siteSchema.safeParse(rawConfig);
  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: "Invalid schema",
        issues: result.error.format(),
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      config: result.data,
      message: `Site config generated for prompt: "${prompt}"`,
      siteId: Math.random().toString(36).slice(2, 10),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
