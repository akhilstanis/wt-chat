# wt-chat
Simple command line chat implemented using [WebTask](https://webtask.io)

## Usage
To start chatting all you have to do is run the following command. Make sure you pass the query params `roomId` and `userName` to connect to given room as given user. To exit, press `Ctrl+C`

    $ bash <(curl -s "https://wt-7d57ee0198622a45d44024209c9f5a26-0.run.webtask.io/join?roomId=Narcos&userName=Pacho")
    
## Hmmm. Shelling curl output? Seems fishy!
Nothing to worry about. The script downloaded by curl is less than 10 lines and doesn't do anything funny. You can verify this first by just checking the curl output by yourself.

    $ curl -s "https://wt-7d57ee0198622a45d44024209c9f5a26-0.run.webtask.io/join?roomId=Narcos&userName=Pacho"
