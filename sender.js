"use latest";

import Pusher from 'pusher';

export default function (ctx, done) {
  const userName = ctx.data.userName;
  const roomId   = ctx.data.roomId;
  const text     = ctx.data.text;

  const pusher = new Pusher({
    appId: ctx.secrets.pusherAppId,
    key: ctx.secrets.pusherKey,
    secret: ctx.secrets.pusherSecret,
    encrypted: true
  });

  pusher.trigger(roomId, 'message', {
    'from': userName,
    'text': text
  }, (err,req,res) => {
    done(null,null);
  });
}
