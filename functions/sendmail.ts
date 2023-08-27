export function onRequest(context) {
 
  return fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'test@some-code.com', name: 'Test Recipient' }],
          },
        ],
        // from: {
        //   email: 'sender@some-code-site.pages.dev',
        //   name: 'Workers - MailChannels integration',
        // },
        subject: 'Look! No servers',
        content: [
          {
            type: 'text/plain',
            value: 'And no email service accounts and all for free too!',
          },
        ],
      }),
    })

  //return new Response("Hello, world!")
}
