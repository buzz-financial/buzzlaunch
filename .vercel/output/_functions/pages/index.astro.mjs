import { c as createComponent, r as renderHead, a as renderComponent, b as renderTemplate } from '../chunks/astro/server_-jRL7Qdb.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function PromptInput() {
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
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      console.log("Server response:", data);
      setStatus(
        res.ok ? `Site is being built for ID: ${data.siteId}` : `Error: ${data.error}`
      );
    } catch (err) {
      setStatus("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx(
      "textarea",
      {
        className: "w-full p-3 border border-gray-300 rounded h-32",
        placeholder: "Describe your business...",
        value: prompt,
        onChange: (e) => setPrompt(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleSubmit,
        disabled: loading || prompt.length < 10,
        className: "bg-black text-white px-4 py-2 rounded hover:bg-gray-800",
        children: loading ? "Generating..." : "Generate My Storefront"
      }
    ),
    status && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: status })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><title>BuzzLaunch</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body class="bg-gray-100 min-h-screen p-8"> <div class="max-w-2xl mx-auto bg-white shadow p-6 rounded"> <h1 class="text-3xl font-bold mb-4">Create Your Storefront</h1> ${renderComponent($$result, "PromptInput", PromptInput, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/BuzzLaunch/src/components/PromptInput.jsx", "client:component-export": "default" })} </div> </body></html>`;
}, "/root/BuzzLaunch/src/pages/index.astro", void 0);

const $$file = "/root/BuzzLaunch/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
