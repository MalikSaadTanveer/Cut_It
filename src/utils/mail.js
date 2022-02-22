const mail = (to, toname, subject, email) => {
  let myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer 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'
  );
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    personalizations: [
      {
        to: [
          {
            email: to,
            name: toname,
          },
        ],
        subject: subject,
      },
    ],
    content: [
      {
        type: 'text/html',
        value: email,
      },
    ],
    from: {
      email: 'nailziapp@gmail.com',
      name: 'Admin',
    },
    reply_to: {
      email: 'nailziapp@gmail.com',
      name: 'Admin',
    },
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://api.sendgrid.com/v3/mail/send', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export default mail;
