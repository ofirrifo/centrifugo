let Client = require('jscent');

const client = new Client({
  url: 'http://localhost:8000',
  secret: 'zaza'
});

setInterval(() => {
  client.publish('terminal', {forClient: true, name: 'ofir1'});
}, 1000);
