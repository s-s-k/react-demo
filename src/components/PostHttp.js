const PostHttp = (url, content) => {
  var promise = new Promise((resolve, reject) => {
    var client;
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      client = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      client = new ActiveXObject('Microsoft.XMLHTTP');
    }
    client.open('POST', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send(JSON.stringify(content));

    function handler () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

export default PostHttp;