const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');
const app = express();

// Discord Bot Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Discord bot token and channel ID
const DISCORD_TOKEN = 'MTA5MDM1MDQ2NTcxMzE5MzA3Mg.Ge7UOP.p0C_idVYbOQOko_VbakrHvRmd01Ct6DhKCUIFg';
const CHANNEL_ID = '1312799876077322340';

client.login(DISCORD_TOKEN);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Routes for forms
app.post('/submit-appeal', (req, res) => {
    const { name, appeal } = req.body;
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        channel.send(`Appeal from ${name}: ${appeal}`);
    }
    res.send('Your appeal has been submitted!');
});

app.post('/submit-report', (req, res) => {
    const { name, report } = req.body;
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        channel.send(`Report from ${name}: ${report}`);
    }
    res.send('Your report has been submitted!');
});

app.post('/submit-career', (req, res) => {
    const { name, resume } = req.body;
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
        channel.send(`Career application from ${name}: ${resume}`);
    }
    res.send('Your career application has been submitted!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
