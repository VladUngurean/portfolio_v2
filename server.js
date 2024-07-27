// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/api/ip-info', async (req, res) => {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        const accessKey = 'dfe9f601-bfdd-4913-845e-e73d6e644148'; // Replace with your actual access key
        const ipInfoResponse = await fetch(`https://apiip.net/api/check?ip=${userIP}&accessKey=${accessKey}`);
        const ipInfoData = await ipInfoResponse.json();

        res.json(ipInfoData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch IP information' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
