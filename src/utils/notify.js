const notify = async (title, body, ids) => {
  const FIREBASE_API_KEY =
    'AAAAGwQzgrU:APA91bEk34OO75H5qK3wiOeo26FiXM_SnPIEzb1eEDNKySWcYHbt_baeaKpzmq3wOjk7osP-6DfINQae7F3F9dcOUGTno4U-beKtSRb8auoTBl90LzvB_yDDuDd6iUGfFi1n7hJUnCAp';
  const message = {
    registration_ids: ids,
    notification: {
      title: title,
      body: body,
      vibrate: 1,
      sound: 1,
      show_in_foreground: true,
      priority: 'high',
      content_available: true,
    },
  };

  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'key=' + FIREBASE_API_KEY,
  });

  let response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers,
    body: JSON.stringify(message),
  });
  response = await response.json();
  return response;
};

export default notify;
