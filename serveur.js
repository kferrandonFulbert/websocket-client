const WebSocket = require('ws');

// Créer un serveur WebSocket sur le port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('Serveur WebSocket en écoute sur ws://localhost:8080');

// Gérer les connexions des clients
wss.on('connection', (ws) => {
    console.log('Un client s\'est connecté.');

    // Répondre aux messages reçus du client
    ws.on('message', (message) => {
        console.log(`Message reçu du client : ${message}`);
        // Réponse au client
        ws.send(`Serveur : Vous avez envoyé -> ${message}`);
    });

    // Gérer la fermeture de la connexion
    ws.on('close', () => {
        console.log('Un client s\'est déconnecté.');
    });

    // Message initial à l'ouverture de la connexion
    ws.send('Connexion au serveur WebSocket réussie.');
});
