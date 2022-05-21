class GameController {
    constructor(channel, Wait, Anim, display) {
        if (!channel || channel === "") return;

        this.channel = channel.toLowerCase()
        this.GameState = "Waiting";

        this.Players = {};
        this.Queue = {};

        
        // Twitch chat connect to channel
        const client = new tmi.Client({
            channels: [ this.channel ]
        });
        
        client.connect();

        client.on("connected", (address, port) => {
            console.log('logged to channel: ' + this.channel)
        })
        
        client.on('message', (channel, tags, message, self) => {
            if(self || !message.startsWith('!')) return;
        
            const args = message.slice(1).split(' ');
            const command = args.shift().toLowerCase();
        
            switch (command) {
                case 'join': 
                    this.AddPlayer(tags['display-name']);
                    break;
                case 'roll': 
                    if (this.GameState !== "Play");
                    this.PlayerRoll(tags['display-name']);
                    break;
                default: console.log("Unknow Command:" + command);
            }
        
            // console.log(`${tags['display-name']}: ${message}`);
        });
    }

    AddPlayer(UserName) {
        if (this.Players[UserName]) return;
        this.Players[UserName] = new Player(UserName,0)
    
        this.Queue[Queue.lenght] = {
            SkippedQueues: 0,
            UserName: UserName
        }
    }

    
    PlayerRoll(UserName) {
        let plr = this.Players[UserName];

        plr.RollTheDice()
    }

}

class MapCreator {
    constructor() {

    }
}