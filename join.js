"use latest";

export default function(ctx, req, res) {
  const userName = ctx.data.userName;
  const roomId   = ctx.data.roomId;

  res.writeHead(200, { 'Content-Type': 'text/plain'});

  if(userName === undefined || roomId === undefined) {
    res.end(`echo 'Parameters userName or roomId were not given. Please make sure the parameters userName and roomId are given.\nExample usage: bash <(curl -s "https://wt-7d57ee0198622a45d44024209c9f5a26-0.run.webtask.io/join?roomId=Narcos&userName=Pablo")'`);
    return false;
  }

  const shellCode = `
  trap 'kill $!; exit' SIGINT;
  {
    while true;
    do
      curl -G --data-urlencode "roomId=${roomId}" --data-urlencode "userName=${userName}" ${ctx.secrets.receiverWTURL};
    done & while true;
    do
      read text && curl -G -s ${ctx.secrets.senderWTURL} --data-urlencode "roomId=${roomId}" --data-urlencode "userName=${userName}" --data-urlencode "text=$text" > /dev/null;
    done
  }
  `;

  res.end(shellCode);
}
