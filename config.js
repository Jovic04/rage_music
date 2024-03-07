module.exports = {
    app: {
        token: 'OTAyNjgyOTY4NjA1MjA0NDgw.GehXYD._NPnh9vT4t3VM0TJriGnibjdrBnGB1rJS16XfI',
        playing: 'You need help? type /help',
        global: true,
        guild: 'xxx',
        ExtraMessages: true,
        loopMessage: true,

    },

    opt: {
        DJ: {
            enabled: true,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 100,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 300000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 300000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
