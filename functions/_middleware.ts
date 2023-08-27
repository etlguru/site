import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some Code Support", email: "support@some-code.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@some-code-site.pages.dev" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});