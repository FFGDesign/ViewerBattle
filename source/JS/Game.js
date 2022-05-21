class GameController {
    constructor(channel) {
        if (!channel || channel === "") return;

        this.channel = channel.toLowerCase()
        this.GameState = "Traveling";

        this.Players = {};
        this.Queue = {};

        
        // Twitch chat connect to channel
        const client = new tmi.Client({
            channels: [ this.channel ]
        });
        
        client.connect();

        client.on("connected", (address, port) => {
            // Update UI
            $('input[type="text"][inp-id="twitch-channel"]').attr("disabled", true)
            $( '.btn[btn-id="Connect"]' ).attr("disabled", true)
            console.log('logged to channel: ' + this.channel)
        })
        
        // Messege Listener
        client.on('message', (channel, tags, message, self) => {
            if(self || !message.startsWith('!')) return;
        
            const args = message.slice(1).split(' ');
            const command = args.shift().toLowerCase();
        
            switch (command) {
                case 'join': 
                    this.AddPlayer(tags['display-name']);
                    break;
                default: console.log("Unknow Command:" + command);
            }
        
            // console.log(`${tags['display-name']}: ${message}`);
        });
    }

    AddPlayer(UserName) {
        if (this.Players[UserName]) return;
        this.Players[UserName] = new Player(UserName,0)
    }


}
