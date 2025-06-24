import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      console.log("Server response:", data);
      setStatus(
        res.ok
          ? `Site is being built for ID: ${data.siteId}`
          : `Error: ${data.error}`
      );
    } catch (err) {
      setStatus("Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded h-32"
        placeholder="Describe your business..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || prompt.length < 10}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Generating..." : "Generate My Storefront"}
      </button>
      {status && <p className="text-sm text-gray-700">{status}</p>}
    </div>
  );
}
