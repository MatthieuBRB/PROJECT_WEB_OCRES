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


# Storybook

Un Storybook a été généré et permet de visualiser individuellement chaque composant React.
Le dossier `src/stories` contient les Stories pour tous les composants. Un fichier équivaut à un composant.

Pour lancer le Storybook localement depuis l'app, Vérifier que l'on est bien dans le dossier `frontend` et lancer l'application Storybook.
```sh
cd frontend
npm run storybook
```

Une version statique a également été créée dans le dossier `storybook-static` permettant d'accéder au Storybook depuis n'importe où.
Si l'on veut déplacer le Storybook (par exemple hors du projet en faisant une copie sur son bureau), il faut déplacer le dossier `storybook-static` dans son entiereté en ne supprimant aucun fichier à l'intérieur.
Il suffit ensuite de lancer `storybook-static/index.html` pour démarrer le Storybook.
