"use latest";

import Pusher from 'pusher-js';

export default function (ctx, req, res) {
  const roomId   = ctx.data.roomId;
  const userName = ctx.data.userName;

  const pusher = new Pusher(ctx.secrets.pusherKey, {
    encrypted: true,
    cluster: ctx.secrets.pusherCluster
  });

  const channel = pusher.subscribe(roomId);

  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.write(`Connected to Room: ${roomId}\n`);

  channel.bind('message', (message) => {
    if(message.from !== userName) {
      res.write(`${message.from}: ${message.text}\n`);
    }
  });
}
