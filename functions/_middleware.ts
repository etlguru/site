import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequestPost = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some Code Support", email: "support@some-code.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@some-code.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});