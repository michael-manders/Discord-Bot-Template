# Discord Bot

This is a bot with a simple command handler

# Setup

- Download this project as a zip and decompress it
- This will have required you to setup a bot application through the [Discord Developer Portal](https://discord.com/developers/applications).
- Copy the Bot Token (should look like this: ODE5NzQ0NjA5NDQxNTQ2MjYz.YErEqQ.bINM5QwIcdne5FKkqBfqUVB5ajo)
- Open the `config.json` file (there is an example there)
- Paste it into the `config.json` file inside the `bot token` quotation marks
- Choose your prefix and set it in the same file
- Then choose your main server that can be easily accessed using '{prefix}status'
- Copy the Client ID from the application page then past it into the field on [this site](https://discordapi.com/permissions.html) and get your bot invite link
- Invite your bot using the link
- There are other things you can edit in `config.json` if you want.
- Save the `config.json` file

# Activation

- Install [Node.js](https://nodejs.org/en/download/)
- Open up a Terminal/Command Prompt and cd into the folder downloaded
- Download the dependencies by running `npm i`
- Start the bot by the command `node .`

# config.json info

If you have enabled `welcomeMsg` by setting it to `true` you will need to enable privileged intents. Follow the instructions on the accepted answer on [this Stack Overflow post](https://stackoverflow.com/questions/64559390/none-of-my-discord-js-guildmember-events-are-emitting-my-user-caches-are-basica).
