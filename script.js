const socket = new WebSocket('ws://localhost:8080');
socket.onopen = () => {
    console.log('Connexion ouverte avec le serveur');
};
socket.onerror = (error) => {
    console.error('Erreur détectée :', error);
};
