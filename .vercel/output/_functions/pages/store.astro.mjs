import { c as createComponent, r as renderHead, a as renderComponent, b as renderTemplate, F as Fragment } from '../chunks/astro/server_-jRL7Qdb.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function HeroSection({ heading, subheading }) {
  return /* @__PURE__ */ jsxs("section", { className: "text-center py-12 bg-white rounded-lg shadow mb-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4", children: heading }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: subheading })
  ] });
}

function ProductCard({ name, price }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded shadow bg-white", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: name }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
      "$",
      price.toFixed(2)
    ] })
  ] });
}

const $$Store = createComponent(($$result, $$props, $$slots) => {
  const config = {
    storeName: "My Test Store",
    sections: [
      {
        type: "hero",
        heading: "Welcome to My Store",
        subheading: "Handmade goods delivered to your door."
      },
      {
        type: "products",
        products: [
          { name: "Sample Product 1", price: 19.99 },
          { name: "Sample Product 2", price: 29.99 },
          { name: "Sample Product 3", price: 39.99 }
        ]
      }
    ]
  };
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>${config.storeName}</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body class="bg-gray-100 min-h-screen p-8"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold mb-6">${config.storeName}</h1> ${config.sections.map((section) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${section.type === "hero" && renderTemplate`${renderComponent($$result2, "HeroSection", HeroSection, { "heading": section.heading, "subheading": section.subheading })}`}${section.type === "products" && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"> ${section.products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", ProductCard, { "name": product.name, "price": product.price })}`)} </div>`}` })}`)} </div> </body></html>`;
}, "/root/BuzzLaunch/src/pages/store.astro", void 0);

const $$file = "/root/BuzzLaunch/src/pages/store.astro";
const $$url = "/store";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Store,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
