# Test WebSocket

Ce projet est une page HTML simple qui teste l'utilisation des WebSockets. Il permet à l'utilisateur d'envoyer des messages via une connexion WebSocket et de recevoir les réponses du serveur.

## Fonctionnalités

- Connexion à un serveur WebSocket (dans cet exemple, `wss://echo.websocket.events`).
- Envoi de messages au serveur via un champ de texte et un bouton.
- Affichage des messages échangés (envoyés et reçus) dans une zone de texte en lecture seule.
- Gestion des événements WebSocket :
  - Connexion ouverte.
  - Réception de messages.
  - Erreur.
  - Fermeture de la connexion.

## Structure du Projet

Le projet est constitué d'un seul fichier HTML intégrant le code JavaScript nécessaire pour gérer les WebSockets.

### Fichiers

- **`index.html`** : Contient le code HTML et JavaScript.

## Prérequis

- Un navigateur moderne avec prise en charge des WebSockets (par exemple, Chrome, Firefox, Edge).

## Instructions d'Utilisation

1. Clonez le projet ou copiez le fichier `index.html`.
2. Ouvrez le fichier dans un navigateur web.
3. Une fois la connexion établie, utilisez le champ de texte pour écrire un message.
4. Cliquez sur le bouton **Envoyer** pour transmettre le message au serveur.
5. Consultez la zone de texte pour voir la réponse du serveur.

## Exemple de Serveur WebSocket

Le projet utilise `wss://echo.websocket.events` comme serveur par défaut. Ce serveur retourne chaque message qu'il reçoit (un echo). 


## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le partager.

---
**Auteur** : [Kévin FERRANDON]
