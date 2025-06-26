import{r as c}from"./index.BVOCwoKb.js";var x={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function h(){if(p)return o;p=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function n(i,e,t){var a=null;if(t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:s,type:i,key:a,ref:e!==void 0?e:null,props:t}}return o.Fragment=l,o.jsx=n,o.jsxs=n,o}var f;function m(){return f||(f=1,x.exports=h()),x.exports}var u=m();function R(){const[s,l]=c.useState(""),[n,i]=c.useState(!1),[e,t]=c.useState(""),a=async()=>{i(!0),t("");try{const r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:s})}),d=await r.json();console.log("Server response:",d),t(r.ok?`Site is being built for ID: ${d.siteId}`:`Error: ${d.error}`)}catch{t("Unexpected error")}finally{i(!1)}};return u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsx("textarea",{className:"w-full p-3 border border-gray-300 rounded h-32",placeholder:"Describe your business...",value:s,onChange:r=>l(r.target.value)}),u.jsx("button",{onClick:a,disabled:n||s.length<10,className:"bg-black text-white px-4 py-2 rounded hover:bg-gray-800",children:n?"Generating...":"Generate My Storefront"}),e&&u.jsx("p",{className:"text-sm text-gray-700",children:e})]})}export{R as default};
