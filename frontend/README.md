# Comment lancer le projet ExoProperty ?

## Si le fichier package.json n'est pas présent

Vérifier que l'on est bien dans le dossier `frontend`.
```sh
cd frontend
```

### Installer React

Si le dossier `node-modules` n'est pas présent, installer React dans le projet.
```sh
npm install
```

### Installer Recharts

Installer la bibliothèque Recharts dans le dossier `frontend` pour pouvoir afficher le graphique.
```sh
npm install recharts
```

### Installer Axios

Installer la bibliothèque Axios dans le dossier `frontend` pour pouvoir communiquer avec la base de données.
```sh
npm install axios
```

### Installer le Router DOM pour React

Installer le Router DOM pour React dans le dossier `frontend` pour pouvoir avoir des liens fonctionnels permettant de changer de page.
```sh
npm install react-router-dom
```

### Lancer l'application front

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
