const venom = require('venom-bot');

const { exec } = require('child_process');

venom.create().then((client) => {

  client.onMessage(async (message) => {

    if (message.body.startsWith('!cmd ')) {

      const command = message.body.substring(5);

      exec(command, (err, stdout, stderr) => {

        if (err) {

          client.sendText(message.from, `An error occurred: ${err}`);

          return;

        }

        client.sendText(message.from, stdout);

      });

    }

  });

}).catch((err) => console.log(err));

