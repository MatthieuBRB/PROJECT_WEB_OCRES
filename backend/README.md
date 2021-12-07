# Comment lancer le backend pour avoir accès à la base de données ?

## Si le fichier package.json n'est pas présent

Vérifier que l'on est bien dans le dossier `backend`.
```sh
cd backend
```

### Installer Express

Si le dossier `node-modules` n'est pas présent, installer Express dans le projet.
```sh
npm install
```

### Installer Mongoose

Installer la bibliothèque Mongoose dans le dossier `backend` pour pouvoir voir accès aux méthodes permettant de faire des requêtes sur la base de données MongoDB.
```sh
npm install mongoose
```

### Installer CORS

Installer CORS (Cross-origin resource sharing) dans le dossier `backend` afin de ne pas avoir d'erreurs lorsque le backend et le frontend communiquent.
```sh
npm install cors
```

### Lancer l'application back

```sh
npm start
```


## Si le fichier package.json est présent

Vérifier que l'on est bien dans le dossier `backend`.
```sh
cd backend
```

Vérifier que toutes les dépendances sont bien présentes dans le fichier package.json
```json
"dependencies": {
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "mongoose": "^6.0.14",
    "morgan": "~1.9.1"
  }
```
Si non, se référer à la [section précédente](#si-le-fichier-packagejson-nest-pas-présent), en fonction des dépendances manquantes (Express / Mongoose / Cors).

Lancer l'application front.
```sh
npm start
```
