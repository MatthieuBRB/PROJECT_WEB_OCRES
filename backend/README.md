# Comment lancer le projet ExoProperty ?

## Si le fichier package.json n'est pas présent

Vérifier que l'on est bien dans le dossier `frontend`.
```sh
cd frontend
```

### Installer Express

Si le dossier `node-modules` n'est pas présent, installer Express dans le projet.
```sh
npm install
```

### Installer Mongoose

Installer la bibliothèque Mongoose dans le dossier `frontend` pour pouvoir voir accès aux méthodes permettant de faire des requêtes sur la base de données MongoDB.
```sh
npm install mongoose
```

### Installer CORS

Installer CORS (Cross-origin resource sharing) dans le dossier afin de ne pas avoir d'erreurs lorsque le backend et le frontend communiquent.
```sh
npm install cors
```

### Lancer l'application back

```sh
npm start
```


## Si le fichier package.json est présent

Vérifier que l'on est bien dans le dossier `frontend`.
```sh
cd frontend
```

Vérifier que toutes les dépendances sont bien présentes dans le fichier package.json
```json
"dependencies": {
    "axios": "^0.24.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-router-dom": "^6.0.2",
    "react-scripts": "3.2.0",
    "recharts": "^2.1.6"
  }
```
Si non, se référer à la [section précédente](#si-le-fichier-packagejson-nest-pas-présent), en fonction des dépendances manquantes (React / Recharts / Axios / React Router DOM).

Lancer l'application front.
```sh
npm start
```
